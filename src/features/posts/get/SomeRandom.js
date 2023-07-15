import { getData } from "./GetSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const SomeRandom = () => {
        const dispatch = useDispatch();
    dispatch(
        getData({
            text: "Value Chnaged",
        })
    )
    const getMyData = useSelector(state => state.get);
    const renderedPosts = getMyData.map(post=>{
        return <article className="post-excerpt" key={post.text}>
            <h3>{post.text}</h3>

        </article>
    })
    // const valueMy = JSON.stringify(getMyData);

    return <h1>
        {renderedPosts}
    </h1>
}

export default SomeRandom;