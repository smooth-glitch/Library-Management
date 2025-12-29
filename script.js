const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Close mobile menu when clicking on links
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Enhanced Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Staggered animation for portfolio items
const portfolioObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.portfolio-item');
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('animate');
                }, index * 150);
            });
        }
    });
}, { threshold: 0.1 });

// Observe all animation elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => observer.observe(el));

    const portfolioSections = document.querySelectorAll('.portfolio-grid');
    portfolioSections.forEach(grid => portfolioObserver.observe(grid));


});

// Enhanced smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced form submission with better UX
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;

    // Add loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    submitBtn.style.background = 'linear-gradient(135deg, #94a3b8, #64748b)';

    // Simulate form submission with better feedback
    setTimeout(() => {
        submitBtn.textContent = 'Message Sent! ✓';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

        // Show success animation
        submitBtn.style.transform = 'scale(1.05)';
        setTimeout(() => {
            submitBtn.style.transform = 'scale(1)';
        }, 200);

        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
            document.querySelector('.contact-form').reset();
        }, 3000);
    }, 2000);
});

// Enhanced parallax effect for hero background
let ticking = false;

function updateParallax() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.3;
    hero.style.transform = `translateY(${rate}px)`;
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
    }
});

// Add subtle hover effects to skill tags
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'translateY(-2px) scale(1.05)';
    });

    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'translateY(0) scale(1)';
    });
});

function openPopupUrl(url, sizeClass = "modal-lg") {
    if (!url) return;

    // Axpert popup (if running inside Axpert)
    if (window.parent && typeof window.parent.createPopup === "function") {
        window.parent.createPopup(url, false, function (e, popup) {
            try {
                const modal = popup && popup.modal && popup.modal.element;
                const dialog = modal ? modal.querySelector(".modal-dialog") : null;
                if (dialog) {
                    dialog.classList.remove("modal-sm", "modal-lg", "modal-xl");
                    dialog.classList.add(sizeClass);
                }
            } catch (err) { }
        }, null);
        return;
    }

    // Fallback: normal navigation
    window.location.href = url;
}

function buildTstructUrl(eot) {
    if (!eot) return "";
    let transid = "", recordid = "0";

    eot.split(",").forEach(part => {
        const kv = part.trim().split("=");
        const key = (kv[0] || "").trim();
        const val = (kv[1] || "").trim();
        if (key === "transid") transid = val;
        if (key === "recordid") recordid = val;
    });

    if (!transid) return "";
    return `tstruct.aspx?transid=${encodeURIComponent(transid)}&recordid=${encodeURIComponent(recordid)}&act=opendummy&load=false`;
}

function buildIViewUrl(ivname) {
    if (!ivname) return "";
    return `iview.aspx?ivname=${encodeURIComponent(ivname)}`;
}

// Delegated click for overlays
document.addEventListener("click", function (e) {
    const t = e.target.closest("a[data-eot]");
    if (t) {
        e.preventDefault();
        e.stopPropagation();
        openPopupUrl(buildTstructUrl(t.getAttribute("data-eot")), t.getAttribute("data-size") || "modal-lg");
        return;
    }

    const iv = e.target.closest("a[data-ivname]");
    if (iv) {
        e.preventDefault();
        e.stopPropagation();
        openPopupUrl(buildIViewUrl(iv.getAttribute("data-ivname")), iv.getAttribute("data-size") || "modal-xl");
        return;
    }
});

// Keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        mobileMenuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});












