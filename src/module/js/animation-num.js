export default function initNumberAnimation() {
  const selectedNumber = document.querySelectorAll("#numberAnim");

      selectedNumber.forEach((numbers) => {
            const total = +numbers.innerHTML;
            let start = 0;
            const timer = setInterval(() => {
                start++;
                numbers.innerHTML = start;
                if (start >= total) {
                    clearInterval(timer);
                }
            }, 80);
        });
    };
