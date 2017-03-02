## DOM操作
1. document.write() <br>
2. innerHTML属性
3. document.createElement(nodeName) **创建元素结点**
4. parent.appendChild(child) **将结点加入结点的子节点中**
5. document.creatTextNode(text) **创建文本结点**
6. parentElement.insertBefore(newElement,targetElement)**在已有元素前插入一个新元素**
   parentElement = targetElement.parentNode
7. **在现有方法后插入一个新元素**
    ```javascript
    function insertAfter(newElement,targetElement){
        var parent = targetElement.parentNode;
        if(parent.lastChild == targetElement){
            parent.appendChild(newElement);
        }else{
            parent.insertBefore(newElement,targetElement.nextSibling);
        }
    }
    ```