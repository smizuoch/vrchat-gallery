document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const dateFilter = document.getElementById('date-filter');
    const tagFilter = document.getElementById('tag-filter');
    const worldFilter = document.getElementById('world-filter');
    const clearFiltersBtn = document.getElementById('clear-filters');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const noResults = document.getElementById('no-results');

    // 検索・フィルター実行
    function filterGallery() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const selectedDate = dateFilter ? dateFilter.value : '';
        const selectedTag = tagFilter ? tagFilter.value.toLowerCase() : '';
        const selectedWorld = worldFilter ? worldFilter.value.toLowerCase() : '';
        
        let visibleCount = 0;

        galleryItems.forEach(item => {
            const tags = item.dataset.tags.toLowerCase();
            const world = item.dataset.world;
            const date = item.dataset.date;
            const avatars = item.dataset.avatars;
            const description = item.querySelector('.card-text') ? 
                item.querySelector('.card-text').textContent.toLowerCase() : '';

            // 検索条件チェック
            const matchesSearch = !searchTerm || 
                tags.includes(searchTerm) || 
                world.includes(searchTerm) || 
                avatars.includes(searchTerm) ||
                description.includes(searchTerm);

            const matchesDate = !selectedDate || date === selectedDate;
            const matchesTag = !selectedTag || tags.includes(selectedTag);
            const matchesWorld = !selectedWorld || world === selectedWorld;

            // 全条件を満たす場合のみ表示
            if (matchesSearch && matchesDate && matchesTag && matchesWorld) {
                item.style.display = 'block';
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        });

        // 検索結果なしメッセージの表示/非表示
        if (noResults) {
            noResults.style.display = visibleCount === 0 ? 'block' : 'none';
        }
    }

    // イベントリスナー設定
    if (searchInput) {
        searchInput.addEventListener('input', debounce(filterGallery, 300));
    }
    
    if (dateFilter) {
        dateFilter.addEventListener('change', filterGallery);
    }
    
    if (tagFilter) {
        tagFilter.addEventListener('change', filterGallery);
    }
    
    if (worldFilter) {
        worldFilter.addEventListener('change', filterGallery);
    }

    // フィルタークリア
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', function() {
            if (searchInput) searchInput.value = '';
            if (dateFilter) dateFilter.value = '';
            if (tagFilter) tagFilter.value = '';
            if (worldFilter) worldFilter.value = '';
            filterGallery();
        });
    }

    // デバウンス関数
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // 遅延読み込み (Intersection Observer)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});
