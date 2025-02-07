
// probs are passed down from parent to child
//To collect data from multiple children, or to have two child components communicate with each other, 
//declare the shared state in their parent component instead.
//The parent component can pass that state back down to the children via props.
//This keeps the child components in sync with each other and with their parent.
function MyButton({ count , onClick}) {   

  

    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}

export { MyButton };