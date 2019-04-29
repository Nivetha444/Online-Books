function createpara(){
    let para = document.createElement('p');
    para.textContent = 'you clikede me!';
    document.body.appendChild(para);

    const button = document.querySelectorAll('Button');

    for(i=0;i<button.length;i++){
        button[i].addEventListener('click', createpara);
    }
}