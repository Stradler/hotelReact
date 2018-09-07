import * as React from "react";
import Loadable from "react-loadable";
import { connect } from "react-redux";
import App from "../components/App";

const ConditionalForm = Loadable({
  loader: () => import("../containers/Form"),
  loading: () => <div> Form is loading </div>
});

export interface IAppComponentProps {
  addMode?: boolean;
}

export interface IAppContainerProps {
  addMode: boolean;
}

const mapStateToProps = ({ addMode }: IAppContainerProps) => {
  return {
    addMode
  };
};

const ConditionalRenderHOC = (Component: React.SFC<IAppComponentProps>) => (
  props: IAppContainerProps
) => {
  const form =  props.addMode ? <ConditionalForm count={0}/> : "";
  return (
    <Component>
      {form}
    </Component>
  );
};

const AppConditional = ConditionalRenderHOC(App);

export default connect(mapStateToProps)(AppConditional);
