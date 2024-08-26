
// محاكاة مكتبة الكتب
let books = [
    { title: "كتاب 1", url: "book1.pdf" },
    { title: "كتاب 2", url: "book2.pdf" },
    { title: "كتاب 3", url: "book3.pdf" }
];

// وظيفة لإدراج كتاب في المكتبة
function uploadFile() {
    const password = document.getElementById("password").value;
    const fileInput = document.getElementById("fileInput");

    if (password !== "1234") {
        alert("كلمة المرور غير صحيحة!");
        return;
    }

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const newBook = { title: file.name, url: URL.createObjectURL(file) };
        books.push(newBook);
        displayBooks(books);
        alert("تم إدراج الكتاب بنجاح!");
    } else {
        alert("يرجى اختيار ملف PDF!");
    }
}

// عرض الكتب في الفهرس
function displayBooks(books) {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    books.forEach((book, index) => {
        const li = document.createElement("li");
        li.textContent = book.title;
        li.onclick = () => previewBook(book);
        bookList.appendChild(li);
    });
}

// وظيفة البحث عن كتاب
function searchBooks() {
    const searchTerm = document.getElementById("searchBar").value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm));
    displayBooks(filteredBooks);
}

// معاينة الكتاب
function previewBook(book) {
    const previewFrame = document.getElementById("previewFrame");
    const downloadBtn = document.getElementById("downloadBtn");
    const addToShelfBtn = document.getElementById("addToShelfBtn");

    previewFrame.src = book.url;
    previewFrame.style.display = "block";
    downloadBtn.style.display = "inline-block";
    addToShelfBtn.style.display = "inline-block";

    downloadBtn.onclick = () => downloadBook(book);
    addToShelfBtn.onclick = () => addToShelf(book);
}

// تحميل الكتاب
function downloadBook(book) {
    const link = document.createElement("a");
    link.href = book.url;
    link.download = book.title;
    link.click();
}

// إضافة الكتاب إلى الحافظة
function addToShelf(book) {
    const shelfList = document.getElementById("shelfList");
    const li = document.createElement("li");
    li.textContent = book.title;
    shelfList.appendChild(li);
}

// عرض الكتب عند تحميل الصفحة
window.onload = () => {
    displayBooks(books);
};
