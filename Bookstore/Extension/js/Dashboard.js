const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () =>{   
    sideBar.classList.toggle('close');
})
//Thẻ tiện ích này cho phép thay đổi giao diện tối sáng tùy ý của các bạn
const toggler = document.getElementById('theme-toggle');

toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});
//Thẻ bổ xung cho extension Dashboard trong mục nhiệm vụ hôm nay
document.getElementById("addbutton").addEventListener("click", function() {
    const input = document.getElementById("itemInput");
    const ul = document.getElementById("mylist");
    const inputValue = input.value.trim();

    if(inputValue) {
        const li = document.createElement("li")
        li.textContent = inputValue;
            ul.appendChild(li);
            input.value = "";
        } else {
            alert("Vui lòng nhập nội dung cho mục mới!");
        }
});

//ví dụ:
document.addEventListener("DOMContentLoaded", function() {
    // Chọn tất cả các mục sidebar
    const menuItems = document.querySelectorAll('.side-menu li');

    // Hàm để xóa class 'active' khỏi tất cả các mục và thêm cho mục được click
    function activateMenuItem(clickedItem) {
        menuItems.forEach(item => item.classList.remove('active'));
        clickedItem.classList.add('active');
    }
    // Thêm sự kiện click cho mỗi mục sidebar
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            activateMenuItem(this);
            const contentKey = this.getAttribute('data-content');
            changeMainContent(contentKey);
        });
    });
});