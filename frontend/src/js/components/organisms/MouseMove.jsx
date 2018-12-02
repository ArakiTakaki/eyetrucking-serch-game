import React from "react";
import { hot } from "react-hot-loader";
// import { Typography, Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "~/store/actions";
import style from "scss/test.scss";

// 選択範囲のはばを調整する。
const SC = 50;
/**
 * 第一引数に比較したいロケーション
 * 第二引数に比較を行うマウス座標を入れる
 * @param { top, right, bottom, left} props 座標情報
 * @param { mouseEventObject } event マウス座標
 */
function location(props, x, y) {
  const { top, right, bottom, left } = props;
  if (top - SC < y && bottom + SC > y && left - SC < x && right + SC > x) {
    return true;
  }
}

const eventSerch = (events, x, y) => {
  for (let event of events) {
    if (location(event, x, y)) {
      event.func();
    }
  }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

const mapStateToProps = state => ({ store: state });

@hot(module)
@connect(
  mapStateToProps,
  mapDispatchToProps
)
class MouseMove extends React.Component {
  constructor(props) {
    super(props);
    this.cursor;
    this.date = new Date().getSeconds();
    this.x = 0;
    this.y = 0;
    this.count = 0;
  }

  componentDidMount() {
    this.cursor = document.getElementById("cursor");
    setInterval(() => {
      const events = this.props.store.events;
      eventSerch(events, this.x, this.y);
      // TODO ログうざいので一旦切る
      // this.props.actions.mouseLocationRegister(this.x, this.y);
    }, 200);
  }

  onMove(event) {
    this.cursor.style.left = `${event.pageX}px`;
    this.cursor.style.top = `${event.pageY}px`;
    this.x = event.pageX;
    this.y = event.pageY;
  }

  render() {
    return (
      <div onMouseMove={this.onMove.bind(this)} className={style.mousemove}>
        <div id="cursor" className={style.mousemove_test} />
      </div>
    );
  }
}

export default MouseMove;
