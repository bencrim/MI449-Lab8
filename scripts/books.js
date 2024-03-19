import { createClient } from "https://esm.sh/@supabase/supabase-js"
const supabaseUrl = 'https://xxkclgutexghthwawlpv.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4a2NsZ3V0ZXhnaHRod2F3bHB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4MDMzMzUsImV4cCI6MjAyNjM3OTMzNX0.CSoA9mNJe8rhDoD1p-DrrL2p3qtNQQlfRAoHDPaa3lU"
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
    let { data: books, error } = await supabase
    .from('books')
    .select('*')

    const container = document.getElementById("container");

    for (let book of books) {
        let bookSection = document.createElement("div");
        let bookTitle = document.createElement('h1');
        let bookAuthor = document.createElement('h2');
        let bookNum = document.createElement('h3');

        bookTitle.innerHTML = `<strong>${book.title}</strong>`;
        bookAuthor.innerText = book.author;
        bookNum.innerText = `ISBN: ${book.isbn}`;
        
        bookSection.appendChild(bookTitle);
        bookSection.appendChild(bookAuthor);
        bookSection.appendChild(bookNum);

        container.appendChild(bookSection);
    }
}

getBooks()