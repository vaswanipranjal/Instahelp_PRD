const app = document.querySelector('#app');

app.innerHTML = `
  <div style="min-height:100vh; background:#f9f9ff; color:#141b2b; font-family:'Plus Jakarta Sans',sans-serif; padding:24px 16px 40px;">
    <div style="max-width:420px; margin:0 auto; background:#fff; border-radius:24px; box-shadow:0 8px 24px rgba(20,27,43,0.06); overflow:hidden; border:1px solid #edf1ff;">
      <header style="padding:18px 16px 12px; background:rgba(249,249,255,0.92); backdrop-filter:blur(16px); position:sticky; top:0; z-index:10; border-bottom:1px solid #eef2ff;">
        <div style="display:flex; align-items:center; justify-content:space-between; gap:12px;">
          <div style="display:flex; align-items:center; gap:10px; min-width:0; flex:1;">
            <button aria-label="Back" style="width:36px;height:36px;border:none;border-radius:10px;background:#f1f3ff;color:#141b2b;display:grid;place-items:center;cursor:pointer;">←</button>
            <div style="display:flex; align-items:center; gap:10px; min-width:0; flex:1;">
              <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=100&q=80" alt="Profile" style="width:28px;height:28px;border-radius:50%;object-fit:cover; border:2px solid #e1e8fd;" />
              <div style="min-width:0;">
                <div style="font-weight:700; font-size:14px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">Live Technician Radar</div>
                <div style="font-size:11px; color:#45464d; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">Indiranagar 560038</div>
              </div>
            </div>
          </div>
          <button style="height:36px; padding:0 12px; border:none; border-radius:10px; background:#e9edff; color:#141b2b; font-size:11px; font-weight:700; display:flex; align-items:center; gap:6px; cursor:pointer;">
            <span style="font-size:15px;">✦</span> Support
          </button>
        </div>
      </header>

      <main style="padding:16px; background:#f9f9ff;">
        <section style="background:linear-gradient(180deg, #ffdcc3 0%, rgba(255,220,195,0.8) 100%); border-radius:18px; padding:16px; border:1px solid rgba(245,158,11,0.2); margin-bottom:16px;">
          <div style="display:flex; align-items:center; gap:8px; font-size:10px; color:#6e3900; font-weight:800; text-transform:uppercase; letter-spacing:0.08em; margin-bottom:10px;">
            <span style="width:8px;height:8px;border-radius:50%;background:#f59e0b; display:inline-block; animation:pulse 1.5s infinite"></span>
            AI Auto-Recovery Active • 3 Nearby Pros Found
          </div>
          <div style="display:flex; gap:12px; align-items:flex-start;">
            <div style="width:40px;height:40px;border-radius:14px;background:rgba(255,255,255,0.5); display:grid; place-items:center; font-size:22px;">⇄</div>
            <div>
              <h1 style="margin:0; font-size:24px; line-height:1.2; font-weight:800;">Your professional is no longer available</h1>
              <p style="margin:8px 0 0; font-size:13px; line-height:1.5; color:#45464d;">We’re automatically assigning another top-rated professional for you right now.</p>
            </div>
          </div>
          <div style="margin-top:14px; background:rgba(255,255,255,0.65); border:1px solid rgba(107,114,128,0.1); border-radius:12px; padding:10px 12px; display:flex; justify-content:space-between; align-items:center;">
            <div style="display:flex; align-items:center; gap:8px; font-size:12px; font-weight:700; color:#141b2b;">
              <span>✓</span>
              Original Slot & Pricing Guaranteed
            </div>
            <span style="background:#82f5c1; color:#006c4a; border-radius:999px; padding:5px 8px; font-size:10px; font-weight:800;">100% Protected</span>
          </div>
        </section>

        <section style="background:#fff; border-radius:18px; padding:18px 16px 12px; margin-bottom:16px; border:1px solid #edf1ff; box-shadow:0 1px 3px rgba(20,27,43,0.04);">
          <div style="display:flex; justify-content:center; margin-bottom:12px;">
            <div style="position:relative; width:170px; height:170px; display:grid; place-items:center;">
              <div style="position:absolute; inset:0; border-radius:50%; background:rgba(168,180,255,0.18); animation:pulse 2s infinite;"></div>
              <svg viewBox="0 0 120 120" width="170" height="170" style="transform:rotate(-90deg);">
                <circle cx="60" cy="60" r="46" fill="none" stroke="#e9edff" stroke-width="7"></circle>
                <circle cx="60" cy="60" r="46" fill="none" stroke="#006c4a" stroke-linecap="round" stroke-dasharray="289" stroke-dashoffset="76" stroke-width="7"></circle>
              </svg>
              <div style="position:absolute; text-align:center;">
                <div style="font-size:28px; font-weight:800;">30s</div>
                <div style="font-size:10px; letter-spacing:0.1em; text-transform:uppercase; color:#45464d; font-weight:700;">Target SLA</div>
              </div>
            </div>
          </div>

          <div style="display:flex; flex-direction:column; gap:14px;">
            <div style="display:flex; gap:10px;">
              <div style="width:26px; height:26px; border-radius:50%; background:#006c4a; color:white; display:grid; place-items:center; font-size:14px;">✓</div>
              <div style="flex:1;">
                <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; margin-bottom:4px;">
                  <div style="font-size:12px; font-weight:700;">Cancellation detected</div>
                  <div style="font-size:11px; color:#76777d;">10:33 AM</div>
                </div>
                <div style="font-size:12px; color:#45464d;">Rajesh Kumar reported sudden emergency</div>
              </div>
            </div>

            <div style="display:flex; gap:10px;">
              <div style="width:26px; height:26px; border-radius:50%; background:#ffdcc3; color:#6e3900; display:grid; place-items:center; font-size:14px;">↻</div>
              <div style="flex:1;">
                <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; margin-bottom:4px;">
                  <div style="font-size:12px; font-weight:800;">Matching nearby UC Pro</div>
                  <div style="font-size:10px; color:#6e3900; background:#ffdcc3; padding:4px 8px; border-radius:999px; font-weight:700;">Within 2.5 km</div>
                </div>
                <div style="font-size:12px; color:#45464d;">Scanning 3 high-rated available partners</div>
              </div>
            </div>

            <div style="display:flex; gap:10px; opacity:0.8;">
              <div style="width:26px; height:26px; border-radius:50%; background:#e9edff; color:#141b2b; display:grid; place-items:center; font-size:14px;">↺</div>
              <div style="flex:1;">
                <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; margin-bottom:4px;">
                  <div style="font-size:12px; font-weight:700;">Instant reassignment</div>
                  <div style="font-size:11px; color:#45464d;">Zero extra cost</div>
                </div>
                <div style="font-size:12px; color:#45464d;">Arriving seamlessly at your original scheduled window</div>
              </div>
            </div>
          </div>
        </section>

        <section style="background:#fff; border-radius:18px; padding:14px; border:1px solid #edf1ff; margin-bottom:16px; box-shadow:0 1px 3px rgba(20,27,43,0.04);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; padding-bottom:10px; border-bottom:1px solid #eef2ff;">
            <div style="display:flex; align-items:center; gap:8px; font-size:12px; font-weight:700; color:#141b2b;">
              <span>📄</span>
              Booking #UC-INSTA-98241
            </div>
            <span style="background:#e9edff; color:#141b2b; padding:5px 8px; border-radius:999px; font-size:10px; font-weight:700;">Express House Cleaning</span>
          </div>
          <div style="display:flex; gap:12px; align-items:flex-start;">
            <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=200&q=80" alt="Home" style="width:80px; height:80px; border-radius:12px; object-fit:cover;" />
            <div style="flex:1; min-width:0;">
              <div style="font-size:14px; font-weight:800; margin-bottom:4px;">Express House Cleaning (2 BHK)</div>
              <div style="font-size:12px; color:#45464d; display:flex; gap:6px; align-items:center;">📍 Flat 402, Sai Residency, 12th Main, Indiranagar</div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px;">
                <div style="font-size:12px; color:#76777d;">Paid amount</div>
                <div style="font-size:16px; font-weight:800;">₹499</div>
              </div>
            </div>
          </div>
          <div style="margin-top:12px; background:#f1f3ff; border-radius:12px; padding:10px 12px; font-size:12px; line-height:1.5; color:#45464d;">
            <strong style="color:#141b2b;">No action needed:</strong> You will <span style="font-weight:800; color:#141b2b;">NOT</span> have to re-enter your details or pay again. Your original slot, time guarantee, and upfront pricing are 100% locked.
          </div>
        </section>

        <section style="background:#fff; border-radius:18px; padding:14px; border:1px solid #edf1ff; box-shadow:0 1px 3px rgba(20,27,43,0.04);">
          <button style="width:100%; border:none; border-radius:12px; background:#e9edff; color:#141b2b; height:46px; font-size:14px; font-weight:800; display:flex; justify-content:center; align-items:center; gap:8px; cursor:pointer;">
            <span>₹</span>
            Cancel & Get Instant Refund (₹499)
          </button>
          <div style="text-align:center; margin-top:10px; font-size:12px; color:#006c4a; font-weight:800;">Zero cancellation fee during auto-recovery</div>
          <div style="text-align:center; margin-top:14px; font-size:12px; color:#45464d;">
            Need immediate human help? <span style="font-weight:800; color:#141b2b;">Request Instant Call from Support</span>
          </div>
        </section>
      </main>
    </div>
  </div>

  <style>
    @keyframes pulse {
      0% { transform: scale(0.96); opacity: 0.8; }
      70% { transform: scale(1.04); opacity: 1; }
      100% { transform: scale(0.96); opacity: 0.8; }
    }
  </style>
`;
