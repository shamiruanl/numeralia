document.addEventListener('DOMContentLoaded', function () {

    const scrollableTabsWrapper = document.getElementById('scrollableTabsWrapper');
    const scrollArrowLeft = document.getElementById('scrollArrowLeft');
    const scrollArrowRight = document.getElementById('scrollArrowRight');

    let scrollInterval;
    const scrollSpeed = 15; // Pixeles por fotograma
    const checkVisibilityDelay = 50; // Retraso para verificar visibilidad de flechas (ms)

    // Función para verificar y actualizar la visibilidad de las flechas
    function updateArrowVisibility() {
            if (!scrollableTabsWrapper) return; // Salir si el elemento no existe

    const {scrollWidth, clientWidth, scrollLeft} = scrollableTabsWrapper;

            if (scrollWidth > clientWidth) { // Hay desbordamiento
        scrollArrowLeft.classList.remove('hidden');
    scrollArrowRight.classList.remove('hidden');

    if (scrollLeft === 0) {
        scrollArrowLeft.style.opacity = '0'; // Ocultar si no hay más hacia la izquierda
                } else {
        scrollArrowLeft.style.opacity = '1';
                }

                if (scrollLeft + clientWidth >= scrollWidth) {
        scrollArrowRight.style.opacity = '0'; // Ocultar si no hay más hacia la derecha
                } else {
        scrollArrowRight.style.opacity = '1';
                }

    // Hacer que las flechas sean visibles para el hover si hay desbordamiento
    scrollArrowLeft.style.pointerEvents = 'auto';
    scrollArrowRight.style.pointerEvents = 'auto';

            } else { // No hay desbordamiento, ocultar ambas flechas
        scrollArrowLeft.classList.add('hidden');
    scrollArrowRight.classList.add('hidden');
    scrollArrowLeft.style.pointerEvents = 'none'; // Deshabilitar eventos de puntero
    scrollArrowRight.style.pointerEvents = 'none';
            }
        }

    // Inicializar la visibilidad de las flechas
    setTimeout(updateArrowVisibility, checkVisibilityDelay); // Pequeño retraso para que el renderizado se asiente
        window.addEventListener('resize', () => setTimeout(updateArrowVisibility, checkVisibilityDelay)); // Revisa al redimensionar
    scrollableTabsWrapper.addEventListener('scroll', updateArrowVisibility); // Revisa al hacer scroll

    // Función para iniciar el desplazamiento
    function startScrolling(direction) {
        clearInterval(scrollInterval); // Limpia cualquier intervalo anterior
            scrollInterval = setInterval(() => {
                if (direction === 'left') {
        scrollableTabsWrapper.scrollLeft -= scrollSpeed;
                } else { // direction === 'right'
        scrollableTabsWrapper.scrollLeft += scrollSpeed;
                }
                // updateArrowVisibility se llamará por el evento 'scroll'
            }, 10); // Cada 10ms (100 fotogramas por segundo si es posible)
        }

    // Función para detener el desplazamiento
    function stopScrolling() {
        clearInterval(scrollInterval);
        }

    // Event Listeners para las flechas
    if (scrollArrowLeft) {
        scrollArrowLeft.addEventListener('mouseenter', () => startScrolling('left'));
    scrollArrowLeft.addEventListener('mouseleave', stopScrolling);
        }
    if (scrollArrowRight) {
        scrollArrowRight.addEventListener('mouseenter', () => startScrolling('right'));
    scrollArrowRight.addEventListener('mouseleave', stopScrolling);
        }

    // Asegurarse de que el tab activo esté visible al cargar la página
    const activeTabButton = document.querySelector('.tab-button.active');
    if (activeTabButton && scrollableTabsWrapper) {
        scrollableTabsWrapper.scrollLeft = activeTabButton.offsetLeft - (scrollableTabsWrapper.clientWidth / 2) + (activeTabButton.clientWidth / 2);
        }

    // Tu función openTab existente
    window.openTab = function (evt, tabName) {
            var i, tabcontent, tabbuttons;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
            }
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
            }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    // Asegurarse de que el tab recién activado esté visible
    const currentActiveButton = evt.currentTarget;
    if (currentActiveButton && scrollableTabsWrapper) {
        // Desplazar el contenedor para que el botón activo esté centrado (aproximado)
        scrollableTabsWrapper.scrollLeft = currentActiveButton.offsetLeft - (scrollableTabsWrapper.clientWidth / 2) + (currentActiveButton.clientWidth / 2);
            }
    updateArrowVisibility(); // Actualizar la visibilidad de las flechas después de un cambio de tab
        };

    // Activar la primera pestaña por defecto al cargar
    document.getElementById("tab1").style.display = "block";
});