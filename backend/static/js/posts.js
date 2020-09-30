console.log("Ready 4 now...")

$(".detail-button").click((event) => {
    event.preventDefault();
    const id = event.target.id;
    console.log("Post id = ", id);
    $.ajax({
        type: "GET",
        url: `http://127.0.0.1:8000/api/posts/${id}`,
        success: response => {
            console.log(response);
            console.log(response.comments)
        },
        error: error => {
            console.log(error)
        }
    })
    // $(".modal-title").html("Hello world");
    // const comments = ["hello", "world"]
    // $(".modal-body").html(`
    //     ${comments.map(comment => `<section> ${comment} </section>`)}
    //     <br/>
    // `)
});