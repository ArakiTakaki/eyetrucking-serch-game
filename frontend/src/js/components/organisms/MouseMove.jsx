import React from "react";
import { hot } from "react-hot-loader";
// import { Typography, Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "~/store/actions";
import style from "scss/test.scss";
import { Button } from "@material-ui/core";

/**
 * 第一引数に比較したいロケーション
 * 第二引数に比較を行うマウス座標を入れる
 * @param { top, right, bottom, left} props 座標情報
 * @param { mouseEventObject } event マウス座標
 */
function location(props, event) {
  const { top, right, bottom, left } = props;
  if (
    top < event.pageY &&
    bottom > event.pageY &&
    left < event.pageX &&
    right > event.pageX
  ) {
    return true;
  }
}

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
  }

  componentDidMount() {
    this.cursor = document.getElementById("cursor");
  }

  onMove(event) {
    this.cursor.style.left = `${event.pageX}px`;
    this.cursor.style.top = `${event.pageY}px`;
    const now = new Date().getSeconds();
    if (this.date !== now) {
      this.date = now;
      this.props.actions.mouseLocationRegister(event.pageX, event.pageY);
      // TODO forでループさせて所定のイベントが１秒以上ひっかかっているのであればtrueにする処理を考える。
      const pageEvent = this.props.store.events[0];
      if (location(pageEvent, event)) {
        this.props.store.events[0].func("/tutorial");
      }
    }
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
