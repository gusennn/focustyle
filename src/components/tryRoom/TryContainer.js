import {connect} from "react-redux";
import Try from "./Try";
let mapStateToProps =(state)=> {
    return {
        tryImage: state.productState.tryImageURL
    }
}
const TryContainer = connect(mapStateToProps)(Try)
export default TryContainer;