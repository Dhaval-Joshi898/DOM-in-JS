const blogData = [
    {
      title: 'First Blog Post',
      date: 'January 1, 2022',
      content: 'this is content of the first blog page.'
    },
    {
      title: 'Second Blog Post',
      date: 'February 1, 2022',
      content: 'This is the content of the second blog post.'
    },
    {
      title: 'Third Blog Post',
      date: 'March 1, 2022',
      content: 'This is the content of the third blog post.'
    }
  ];

function addBlog(blog){

    const blogPost=document.createElement('div')
    blogPost.setAttribute('class','blog-post')

    const blogHeader=document.createElement('div')
    blogHeader.setAttribute('class','blog-header')

    const blogTitle=document.createElement('h2')
    blogTitle.setAttribute('class','blog-title')
    blogTitle.textContent=blog.title

    const blogDate=document.createElement('p')
    blogDate.setAttribute('class','blog-date')
    blogDate.textContent=blog.date

    const blogContent=document.createElement('p')
    blogContent.setAttribute('class','blog-content')
    blogContent.textContent=blog.content

    blogHeader.append(blogTitle,blogDate)

    blogPost.appendChild(blogHeader)

    blogPost.appendChild(blogContent)

    const unList=document.getElementsByClassName('blog-list');
    unList[0].appendChild(blogPost)

    return blogPost
    


}

// console.log(addBlog(blogData))
  
blogData.forEach((blog)=> {            //for each is used to iterate over an array . In this we have array of object 
    addBlog(blog);
});