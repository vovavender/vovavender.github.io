const getS = selector => document.querySelector(selector);

getS('.btn-edit').addEventListener('click', function(){
    getS('.edit-block').classList.add('show');
    getS('.style-block').classList.remove('show');
    getS('.edit-area').value = getS('.top-block').innerHTML;
})

getS('.btn-save').addEventListener('click', function(){
    getS('.edit-block').classList.remove('show');
    getS('.top-block').innerHTML = getS('.edit-area').value;
})

// getS('.btn-save').onclick = function () {
//     getS('.edit-block').classList.remove('show');
//     getS('.top-block').innerHTML = getS('.edit-area').value;
// }

getS('.btn-style').addEventListener('click', () => {
    getS('.style-block').classList.add('show');
    getS('.edit-block').classList.remove('show');
})

function fontSize() {
    // console.log(event);
    getS('.top-block').style.fontSize = event.target.value;
}

//SELECT
let ff = document.getElementById('fontFamily');
ff.addEventListener('change', function(){
    getS('.top-block').style.fontFamily = this.value;
})

//BG COLOR AND TEXT COLOR
getS('.btn-text-color').addEventListener('click', function () {
    getS('.colors').style.display = 'flex';
    getS('.bg-color').style.display = 'none';
    console.log('text click')
    let colors = ['#f04a3e', '#2a76da', '#21bd35', 'black', '#da9c2a', '#da2a6e', 'white', '#6e2ada', '#2092be'];
    for (let i = 0; i < getS('.colors').children.length; i++) {
        getS('.colors').children[i].style.backgroundColor = colors[i];
        getS('.colors').children[i].onclick = function () {
            getS('.top-block').style.color = this.style.backgroundColor;
        }
    }
})

getS('.btn-bg-color').addEventListener('click', function () {
    getS('.colors').style.display = 'none';
    getS('.bg-color').style.display = 'flex';
    console.log('button click')
    let bgColor = ['#f04a3e', '#2a76da', '#21bd35', 'black', '#da9c2a', '#da2a6e', 'white', '#6e2ada', '#2092be'];
    for (let i = 0; i < getS('.bg-color').children.length; i++) {
        getS('.bg-color').children[i].style.backgroundColor = bgColor[i];
        getS('.bg-color').children[i].onclick = function () {
            getS('.top-block').style.backgroundColor = this.style.backgroundColor;
        }
    }
})
//BG COLOR AND TEXT COLOR END

/*Start function bold style*/
//ROBOCH VARIANT BOLD AND CURSIVE OROGINAl
function fontWeight() {
    if (event.target.checked) {
        console.log(event)
        getS('.top-block').classList.add('bold');
    }
    else {
        getS('.top-block').classList.remove('bold');
    }
}

function fontCursive() {
    if (event.target.checked) {
        console.log(event)
        getS('.top-block').classList.add('cursive');
    }
    else {
        getS('.top-block').classList.remove('cursive');
    }
}
//END ROBOCH VARIANT BOLD AND CURSIVE

getS('.btn-add').onclick = function () {
    getS('.first').classList.remove('show');
    getS('.second').classList.add('show');
}

//Create list and table
function listTable() {
    let formsInfo = document.forms.f3;
    let articles = formsInfo.article.value;
    if (articles === 'table') {
        console.log(articles)
        getS('.create-table').style.display = 'block';
        getS('.create-list').style.display = 'none';
        getS('.btn-create-table').addEventListener('click', function () {
            let tableWidth = document.getElementById("tablewidth"),
                tableHeight = document.getElementById("tableheight"),
                valueWidth = tableWidth.value,
                valueHeight = tableHeight.value,
                numRows = document.getElementById("rows"),
                numColumns = document.getElementById("columns"),
                tableborder = document.getElementById("tableborder");
            widthBorder = tableborder.value;
            rows = numRows.value,
                columns = numColumns.value,
                tr = "",
                td = "",
                firstTable = document.querySelector("table");
            const borders = document.forms['style-table'];
            const typeBorder = borders.typeborder.value;
            const borderColor = borders.typecolor.value;
            // console.log(typeBorder, borderColor)
            console.log(valueWidth);
            console.log(valueHeight);
            console.log(rows);
            console.log(columns);

            getS('.edit-area').value += '<table>';
            for (let i = 0; i < rows; i++) {
                getS('.edit-area').value += '<tr>';
                for (let j = 0; j < columns; j++) {
                    getS('.edit-area').value += `<td style="width:${valueWidth}px; height:${valueHeight}px; border:${widthBorder}px ${typeBorder} ${borderColor};">TD</td>`;
                }
                getS('.edit-area').value += '</tr>';
            }
            getS('.edit-area').value += '</table>';

            getS('.first').classList.add('show');
            getS('.second').classList.remove('show');
        })
    }
    else {
        getS('.create-table').style.display = 'none';
        getS('.create-list').style.display = 'block';
        const list = document.forms['form-list'];

        getS('.btn-create-list').onclick = function () {
            // console.log(list)
            const countLi = list.count.value;
            const typeLi = list.type.value;
            getS('.edit-area').value += `<ul style="list-style-type: ${typeLi}">`;
            for (let i = 0; i < countLi; i++) {
                getS('.edit-area').value += `<li>item ${i + 1}</li>`;
            }
            getS('.edit-area').value += '</ul>';
            // console.log(countLi,typeLi)

            getS('.first').classList.add('show');
            getS('.second').classList.remove('show');
        }

        if (articles === 'table') {
            console.log(articles)
            getS('.create-table').style.display = 'block';
        }
    }
}
