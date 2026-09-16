document.addEventListener('DOMContentLoaded', () => {

    // === 1. 分類篩選功能 (Filter) ===
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.portfolio-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 切換按鈕 active 樣式
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            // 根據選取類別隱藏/顯示作品
            cards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // === 2. 彈出視窗 (Modal) ===
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalImg = document.getElementById('modalImg');
    const closeBtn = document.querySelector('.close-btn');

    // 點擊卡片開啟彈出視窗
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.getAttribute('data-title');
            const desc = card.getAttribute('data-desc');
            const imgSrc = card.getAttribute('data-img');

            modalTitle.innerText = title;
            modalDesc.innerText = desc;
            modalImg.src = imgSrc;

            modal.style.display = 'flex';
        });
    });

    // 點擊關閉按鈕
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // 點擊視窗背景也可以關閉 Modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

});