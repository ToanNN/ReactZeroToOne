
// probs are passed down from parent to child
function MyButton({ count , onClick}) {   

  

    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}

export { MyButton };