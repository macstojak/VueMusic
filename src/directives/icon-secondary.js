export default{
    beforeMount(el, binding){
        console.log(el.innerHtml, binding);
        let iconClass = `fa fa-${binding.value.icon} text-green-400 text-xl`;
       
        if(binding.value.right) {
            iconClass += ' float-right';
        }
     
        el.innerHtml += `<i class="${iconClass}"></i>`;
     }
};