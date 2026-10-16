// Pseudo-3D banner: a wireframe icosahedron projected on a 2D canvas.
// Deterministic: the frame depends only on time `t`, so it loops seamlessly
// every DURATION seconds and can be exported frame by frame.
(function () {
  const DURATION = 8;           // seconds per seamless loop
  const canvas = document.getElementById("scene");
  const ctx = canvas.getContext("2d");
  const W = canvas.width, H = canvas.height;

  const p = (1 + Math.sqrt(5)) / 2;
  const verts = [
    [-1, p, 0], [1, p, 0], [-1, -p, 0], [1, -p, 0],
    [0, -1, p], [0, 1, p], [0, -1, -p], [0, 1, -p],
    [p, 0, -1], [p, 0, 1], [-p, 0, -1], [-p, 0, 1],
  ].map(v => { const l = Math.hypot(...v); return v.map(c => c / l); });
  const edges = [];
  for (let i = 0; i < verts.length; i++)
    for (let j = i + 1; j < verts.length; j++) {
      const d = Math.hypot(...verts[i].map((c, k) => c - verts[j][k]));
      if (d < 1.1) edges.push([i, j]);
    }

  // Deterministic particles (seeded, no Math.random)
  const particles = Array.from({ length: 40 }, (_, i) => ({
    x: (i * 137.5) % W,
    y: (i * 71.3) % H,
    r: 0.6 + (i % 3) * 0.5,
    ph: i % 8,
  }));

  function rotate(v, ax, ay) {
    let [x, y, z] = v;
    const cy = Math.cos(ay), sy = Math.sin(ay);
    [x, z] = [x * cy + z * sy, -x * sy + z * cy];
    const cx = Math.cos(ax), sx = Math.sin(ax);
    [y, z] = [y * cx - z * sx, y * sx + z * cx];
    return [x, y, z];
  }

  function render(t) {
    const a = (t / DURATION) * Math.PI * 2;
    ctx.clearRect(0, 0, W, H);

    // subtle moving grid
    ctx.strokeStyle = "rgba(124,58,237,0.08)";
    ctx.lineWidth = 1;
    const off = ((t / DURATION) * 40) % 40;
    for (let x = -40 + off; x < W; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y < H; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

    // particles twinkle
    for (const s of particles) {
      const al = 0.15 + 0.25 * (0.5 + 0.5 * Math.sin(a * s.ph + s.x));
      ctx.fillStyle = `rgba(196,181,253,${al})`;
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
    }

    // glow behind the object
    const cx = 960, cy = 150 + Math.sin(a) * 8, R = 105;
    const g = ctx.createRadialGradient(cx, cy, 10, cx, cy, 190);
    g.addColorStop(0, "rgba(124,58,237,0.35)");
    g.addColorStop(1, "rgba(124,58,237,0)");
    ctx.fillStyle = g; ctx.fillRect(cx - 200, 0, 400, H);

    // project
    const pts = verts.map(v => {
      const [x, y, z] = rotate(v, a * 1 + 0.5, a * 2);
      const s = 1 / (1 - z * 0.25);
      return { x: cx + x * R * s, y: cy + y * R * s, z };
    });

    ctx.lineCap = "round";
    for (const [i, j] of edges) {
      const A = pts[i], B = pts[j];
      const depth = (A.z + B.z) / 2;           // -1 (far) .. 1 (near)
      const k = (depth + 1) / 2;
      const grad = ctx.createLinearGradient(A.x, A.y, B.x, B.y);
      grad.addColorStop(0, "#c4b5fd");
      grad.addColorStop(1, "#60a5fa");
      ctx.strokeStyle = grad;
      ctx.globalAlpha = 0.25 + 0.75 * k;
      ctx.lineWidth = 1 + 1.4 * k;
      ctx.shadowColor = "#7c3aed"; ctx.shadowBlur = 10 * k;
      ctx.beginPath(); ctx.moveTo(A.x, A.y); ctx.lineTo(B.x, B.y); ctx.stroke();
    }
    ctx.globalAlpha = 1; ctx.shadowBlur = 0;
    for (const v of pts) {
      const k = (v.z + 1) / 2;
      ctx.fillStyle = `rgba(224,231,255,${0.4 + 0.6 * k})`;
      ctx.beginPath(); ctx.arc(v.x, v.y, 1.5 + 2 * k, 0, Math.PI * 2); ctx.fill();
    }
  }

  // Used by scripts/export-frames.mjs to capture exact frames
  window.BANNER_DURATION = DURATION;
  window.renderFrame = render;

  const params = new URLSearchParams(location.search);
  if (params.has("t")) {            // static/export mode: index.html?t=1.5
    render(parseFloat(params.get("t")) || 0);
  } else {
    const start = performance.now();
    (function loop(now) { render((now - start) / 1000); requestAnimationFrame(loop); })(start);
  }
})();
