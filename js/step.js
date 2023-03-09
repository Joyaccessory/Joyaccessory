const progress = document.querySelector('.progress')
        const next = document.getElementById('next')
        const circles = document.querySelectorAll('.circle')

        let currentActive = 1

        next.addEventListener('click', () => {
            currentActive++

            if (currentActive > circles.length) {
                currentActive = circles.length
            }

            updata()
        })

        function updata() {
            circles.forEach((circle, idx) => {
                if (idx < currentActive) {
                    circle.classList.add('active')
                } else {
                    circle.classList.remove('active')
                }
            })

            const actives = document.querySelectorAll('.active')

            progress.style.width = (actives.length -0.95) / (circles.length -0.95) * 100 + '%'

            if (currentActive === 1) {
                prev.disabled = true
            } else if (currentActive === circles.length) {
                next.disabled = true
            } else {
                prev.disabled = false
                next.disabled = false
            }
        }