import React from "react";
import  $ from 'jquery';
import mCustomScrollbar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css'

export class MCustomScrollBar extends React.Component {
  componentDidMount() {
    this.$el = $(this.el);
    this.$el.mCustomScrollbar({axis:'x'});
  }

  componentWillUnmount() {
    this.$el.mCustomScrollbar('destroy');
  }

  render() {
    return (
      <div ref={el => this.el = el}>
        {this.props.children}
      </div>
    );
  }
}
