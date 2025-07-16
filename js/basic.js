
        // 네비게이션 클릭 이벤트
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', function() {
                // 기존 활성 상태 제거
                document.querySelectorAll('.nav-item').forEach(nav => {
                    nav.style.color = '#333';
                    nav.style.borderBottomColor = 'transparent';
                });
                
                // 클릭된 아이템 활성화
                this.style.color = '#007bff';
                this.style.borderBottomColor = '#007bff';
                
                console.log('선택된 메뉴:', this.textContent);
            });
        });

        // 상단 메뉴 클릭 이벤트
        document.querySelectorAll('.top-bar a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('상단 메뉴 클릭:', this.textContent);
            });
        });

        // 스크롤 시 헤더 그림자 효과
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            if (window.scrollY > 0) {
                header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            } else {
                header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            }
        });

        // 이미지 로드 에러 처리
        document.querySelectorAll('img').forEach(img => {
            img.addEventListener('error', function() {
                this.style.display = 'none';
            });
        });

        //자동 슬라이드
        document.addEventListener('DOMContentLoaded', function () {
            console.log('✅ basic.js loaded and running');

            let current = 1;
            const totalSlides = 5;
        
            setInterval(() => {
                const currentRadio = document.getElementById('slide' + current);
                if (currentRadio) currentRadio.checked = false;
        
                current = current % totalSlides + 1;
        
                const nextRadio = document.getElementById('slide' + current);
                if (nextRadio) nextRadio.checked = true;
            }, 4000);
        });