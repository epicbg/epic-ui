export function setDataPropVal(e, context){
    let attr = e.target.getAttribute('ui-bind')
    context.props.data[attr] = e.target.value
    context.renderHTML()
}