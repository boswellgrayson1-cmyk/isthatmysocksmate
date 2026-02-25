// ============================================================
//  Is That My Sock's Mate? – App Logic
// ============================================================

const socks = [
  // ── KIDS ──────────────────────────────────────────────────
  {
    id: 1,
    name: "Dino Ankle Sock",
    brand: "Hanes",
    category: "kids",
    emoji: "🧦",
    color: "#ff9f43",
    desc: "Bright green with tiny T-Rex prints. Size 4–6 kids. The other one definitely got eaten.",
    since: "3 weeks ago",
  },
  {
    id: 2,
    name: "Rainbow Stripe Knee-High",
    brand: "Carter's",
    category: "kids",
    emoji: "🧦",
    color: "#ff6b81",
    desc: "Seven-stripe rainbow. Size 6–8 kids. Last seen near the bottom of the laundry pile.",
    since: "2 days ago",
  },
  {
    id: 3,
    name: "Unicorn Crew Sock",
    brand: "Old Navy",
    category: "kids",
    emoji: "🧦",
    color: "#a29bfe",
    desc: "Pink with holographic unicorn horn. Size 7–10 kids. Its partner is probably in Narnia.",
    since: "1 month ago",
  },
  {
    id: 4,
    name: "Superhero Ankle Sock",
    brand: "Marvel / Target",
    category: "kids",
    emoji: "🧦",
    color: "#48dbfb",
    desc: "Spider-Man themed, red and blue. Size 4–6. Did whatever a spider does – vanished.",
    since: "5 days ago",
  },
  {
    id: 5,
    name: "Paw Patrol No-Show",
    brand: "Nickelodeon",
    category: "kids",
    emoji: "🧦",
    color: "#ff9f43",
    desc: "Chase is on the case – but we still can't find this sock's mate. Blue/orange. Size 4–7.",
    since: "10 days ago",
  },
  {
    id: 6,
    name: "Fuzzy Monster Toe Sock",
    brand: "Justice",
    category: "kids",
    emoji: "🧦",
    color: "#fd79a8",
    desc: "Each toe a different neon color with googly eye prints. Size 9–12 kids. Scary but adorable.",
    since: "6 weeks ago",
  },

  // ── MEN'S ─────────────────────────────────────────────────
  {
    id: 7,
    name: "Classic White Crew",
    brand: "Nike",
    category: "mens",
    emoji: "🧦",
    color: "#dfe6e9",
    desc: "Standard white crew with gray toe/heel. Men's L (9–11). Looks like every other white sock ever made.",
    since: "Unknown",
  },
  {
    id: 8,
    name: "Argyle Dress Sock",
    brand: "Calvin Klein",
    category: "mens",
    emoji: "🧦",
    color: "#6c5ce7",
    desc: "Navy blue argyle, over-the-calf. Men's M (7–10). Too fancy to lose but here we are.",
    since: "2 months ago",
  },
  {
    id: 9,
    name: "Athletic Cushion Quarter",
    brand: "Under Armour",
    category: "mens",
    emoji: "🧦",
    color: "#636e72",
    desc: "Gray/black with UA logo. Men's XL (12–15). Lost somewhere between the gym and the car.",
    since: "1 week ago",
  },
  {
    id: 10,
    name: "Taco Tuesday Crew",
    brand: "Happy Socks",
    category: "mens",
    emoji: "🧦",
    color: "#fdcb6e",
    desc: "Covered in tiny tacos and hot sauce bottles. Men's one-size. We cry every Tuesday.",
    since: "3 days ago",
  },
  {
    id: 11,
    name: "Beer Mug Novelty Crew",
    brand: "Stance",
    category: "mens",
    emoji: "🧦",
    color: "#e17055",
    desc: "Tan with amber beer mug graphic. Size 9–12. Gone before last call.",
    since: "4 weeks ago",
  },
  {
    id: 12,
    name: "No-Show Low Cut",
    brand: "Adidas",
    category: "mens",
    emoji: "🧦",
    color: "#b2bec3",
    desc: "Black with three white stripes at the toe. Men's M. You literally cannot see it – which explains everything.",
    since: "Yesterday",
  },
  {
    id: 13,
    name: "Hiking Merino Wool",
    brand: "Darn Tough",
    category: "mens",
    emoji: "🧦",
    color: "#00b894",
    desc: "Olive green merino wool crew. Men's L. Cost $25. The loss stings twice as much.",
    since: "8 weeks ago",
  },
  {
    id: 14,
    name: "Compression Running Sock",
    brand: "Balega",
    category: "mens",
    emoji: "🧦",
    color: "#0984e3",
    desc: "Royal blue compression mid-calf. Men's M (7–9). Probably still running.",
    since: "5 days ago",
  },

  // ── WOMEN'S ───────────────────────────────────────────────
  {
    id: 15,
    name: "Fuzzy Cozy Slipper Sock",
    brand: "Barefoot Dreams",
    category: "womens",
    emoji: "🧦",
    color: "#fd79a8",
    desc: "Blush pink, impossibly soft, non-slip bottom. One-size women's. Vanished during movie night.",
    since: "2 weeks ago",
  },
  {
    id: 16,
    name: "Floral Ankle Sock",
    brand: "Kate Spade",
    category: "womens",
    emoji: "🧦",
    color: "#a29bfe",
    desc: "White with pastel floral embroidery. Women's 5–9. Too cute to lose. Too lost to find.",
    since: "1 month ago",
  },
  {
    id: 17,
    name: "Tie-Dye Crew Sock",
    brand: "Free People",
    category: "womens",
    emoji: "🧦",
    color: "#fd79a8",
    desc: "Swirling purple/pink tie-dye. Women's one-size. Gone with the vibes.",
    since: "3 weeks ago",
  },
  {
    id: 18,
    name: "Cat Face No-Show",
    brand: "Sock It to Me",
    category: "womens",
    emoji: "🧦",
    color: "#ffeaa7",
    desc: "Yellow with a tiny cat face at the toe. Women's 5–10. Meow.",
    since: "6 days ago",
  },
  {
    id: 19,
    name: "Striped Knee-High",
    brand: "Hue",
    category: "womens",
    emoji: "🧦",
    color: "#6c5ce7",
    desc: "Black and white vertical stripes, over-the-knee. Women's one-size. A true icon – irreplaceable.",
    since: "2 months ago",
  },
  {
    id: 20,
    name: "Avocado Toast Crew",
    brand: "ModSock",
    category: "womens",
    emoji: "🧦",
    color: "#55efc4",
    desc: "Mint green with avocado on toast illustrations. Women's 6–10. As missing as the housing market.",
    since: "4 days ago",
  },
  {
    id: 21,
    name: "Trouser Ankle Sock",
    brand: "Bombas",
    category: "womens",
    emoji: "🧦",
    color: "#2d3436",
    desc: "Charcoal gray, seamless toe. Women's M. Lost it but donated one was given in its name.",
    since: "3 days ago",
  },
  {
    id: 22,
    name: "Glitter Holiday Crew",
    brand: "Target / Wondershop",
    category: "womens",
    emoji: "🧦",
    color: "#d63031",
    desc: "Red with gold glitter snowflakes. Women's 4–10. It's July and we're still looking.",
    since: "7 months ago",
  },

  // ── UNISEX ────────────────────────────────────────────────
  {
    id: 23,
    name: "Plain Black Ankle Sock",
    brand: "Fruit of the Loom",
    category: "unisex",
    emoji: "🧦",
    color: "#2d3436",
    desc: "Just… black. Adult M. Could be anyone's. Could belong anywhere. Does it even have a mate? Yes.",
    since: "The dawn of time",
  },
  {
    id: 24,
    name: "Holiday Gingerbread Crew",
    brand: "Gap",
    category: "unisex",
    emoji: "🧦",
    color: "#e17055",
    desc: "Brown with gingerbread men. One-size. Got baked into the dryer.",
    since: "Last Christmas",
  },
  {
    id: 25,
    name: "Pizza Slice Ankle Sock",
    brand: "Hot Sox",
    category: "unisex",
    emoji: "🧦",
    color: "#fdcb6e",
    desc: "White with giant cheesy pizza slices. One-size. Delicious. Also missing.",
    since: "1 week ago",
  },
  {
    id: 26,
    name: "Tie-Dye Ankle Sock",
    brand: "Vans",
    category: "unisex",
    emoji: "🧦",
    color: "#a29bfe",
    desc: "Retro pink/purple/yellow swirl. One-size. Skated off into the sunset alone.",
    since: "2 weeks ago",
  },
  {
    id: 27,
    name: "Bamboo Sport Crew",
    brand: "Swiftwick",
    category: "unisex",
    emoji: "🧦",
    color: "#00cec9",
    desc: "Teal eco-friendly bamboo blend. Adult M/L. Sustainably lost.",
    since: "3 weeks ago",
  },
  {
    id: 28,
    name: "Alien Abduction Crew",
    brand: "Sock It to Me",
    category: "unisex",
    emoji: "🧦",
    color: "#6c5ce7",
    desc: "Purple with a green alien lifting a sock into a UFO. Ironic. Also gone.",
    since: "Abducted",
  },
];

// ── State ──────────────────────────────────────────────────
let activeFilter = "all";
let searchQuery = "";

// ── DOM refs ───────────────────────────────────────────────
const grid       = document.getElementById("sock-grid");
const searchInput = document.getElementById("search");
const filterBtns = document.querySelectorAll(".filter-btn");
const emptyState  = document.getElementById("empty-state");
const modal       = document.getElementById("modal");
const toast       = document.getElementById("toast");
const totalEl     = document.getElementById("total-count");
const matchedEl   = document.getElementById("matched-count");

// ── Helpers ────────────────────────────────────────────────
function getCategoryLabel(cat) {
  const map = { kids: "Kids", mens: "Men's", womens: "Women's", unisex: "Unisex" };
  return map[cat] || cat;
}

function getCategoryClass(cat) {
  return `cat-${cat}`;
}

// random delay for wobble animation stagger
function randomDelay() {
  return `${(Math.random() * 2).toFixed(2)}s`;
}

// ── Render ─────────────────────────────────────────────────
function renderGrid() {
  const q = searchQuery.toLowerCase().trim();

  const filtered = socks.filter((sock) => {
    const matchCat = activeFilter === "all" || sock.category === activeFilter;
    const matchSearch =
      !q ||
      sock.name.toLowerCase().includes(q) ||
      sock.brand.toLowerCase().includes(q) ||
      sock.desc.toLowerCase().includes(q) ||
      sock.category.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  grid.innerHTML = "";

  if (filtered.length === 0) {
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";

  filtered.forEach((sock) => {
    const card = document.createElement("article");
    card.className = "sock-card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `${sock.name} by ${sock.brand}`);
    card.innerHTML = `
      <div class="card-header">
        <span class="status-dot" title="Still missing"></span>
        <span class="category-badge ${getCategoryClass(sock.category)}">${getCategoryLabel(sock.category)}</span>
        <div class="sock-emoji" style="--delay:${randomDelay()}">${sock.emoji}</div>
      </div>
      <div class="card-body">
        <div class="brand">${sock.brand}</div>
        <h3>${sock.name}</h3>
        <p class="desc">${sock.desc}</p>
        <div class="card-footer">
          <span class="lost-tag">🔍 Lost ${sock.since}</span>
          <button class="match-btn" aria-label="I found this sock's mate">I Found It! 🎉</button>
        </div>
      </div>
    `;

    card.addEventListener("click", (e) => {
      if (!e.target.classList.contains("match-btn")) {
        openModal(sock);
      }
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(sock);
      }
    });

    card.querySelector(".match-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      showToast(`🎉 Amazing! You found ${sock.name}'s mate!`);
    });

    grid.appendChild(card);
  });
}

// ── Modal ──────────────────────────────────────────────────
function openModal(sock) {
  document.getElementById("modal-emoji").textContent  = sock.emoji;
  document.getElementById("modal-name").textContent   = sock.name;
  document.getElementById("modal-brand").textContent  = sock.brand;
  document.getElementById("modal-desc").textContent   = sock.desc;
  document.getElementById("modal-since").textContent  = `Lost ${sock.since}`;
  document.getElementById("modal-cat").textContent    = getCategoryLabel(sock.category);
  document.getElementById("modal-cat").className      = `category-badge ${getCategoryClass(sock.category)}`;

  modal.classList.add("open");
  modal.querySelector(".modal").focus();
}

function closeModal() {
  modal.classList.remove("open");
}

// ── Toast ──────────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}

// ── Event Listeners ────────────────────────────────────────
searchInput.addEventListener("input", () => {
  searchQuery = searchInput.value;
  renderGrid();
});

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    renderGrid();
  });
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

document.getElementById("modal-close").addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

document.getElementById("modal-share").addEventListener("click", () => {
  const text = "I found my missing sock's mate on IsThatMySocksMate! 🧦👀 #SockMate";
  if (navigator.share) {
    navigator.share({ title: "Is That My Sock's Mate?", text, url: location.href });
  } else {
    navigator.clipboard.writeText(text).then(() => showToast("Copied to clipboard! Share away 🧦"));
  }
});

// ── Stats ──────────────────────────────────────────────────
function updateStats() {
  totalEl.textContent = socks.length.toLocaleString();
  // Simulate "matched today" with a fun random number
  const base = 47;
  matchedEl.textContent = (base + Math.floor(Math.random() * 12)).toString();
}

// ── Init ───────────────────────────────────────────────────
updateStats();
renderGrid();
