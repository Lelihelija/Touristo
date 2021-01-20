import React from 'react';

/*
=====PROPS=====

  name (String)               set id from symbol in defs
  customClass (String)        additional classNames separated with whitespaces
  width (String) set html attribute "width" with value (recommended to use "em" according to css properties)
  height (String) set html attribute "height" with value (recommended to use "em" according to css properties)

=====EXAMPLES=====

code:
      <Icon name="icon-phone" />
    result:
      <svg className="icon icon-phone">
        <use xlinkHref="#icon-phone"></use>
      </svg>

code:
    <Icon name="icon-phone" customClass="asdasdas"/>
  result:
    <svg className="icon icon-phone asdasdas">
      <use xlinkHref="#icon-phone"></use>
    </svg>

code:
    <Icon name="icon-phone" width="2em" height="1em"/>
  result:
    <svg className="icon icon-phone" width="2em" height="1em">
      <use xlinkHref="#icon-phone"></use>
    </svg>

code:
    <Icon name="icon-mobile" customClass="footer__contacts-phone-img" width={`${16/24}em`} height="1em" />
  result:
    <svg class="icon icon-mobile footer__contacts-phone-img" width="0.6666666666666666em" height="1em">
      <use xlink:href="#icon-mobile"></use>
    </svg>
*/

const icon = (props) => {
  return (
    <svg
      className={`icon ${props.name ? props.name : ''}${props.customClass ? ' ' + props.customClass : ''}`}
      width={props.width ? props.width : null}
      height={props.height ? props.height : null}>
      <use xlinkHref={'#' + props.name}></use>
    </svg>
  );
};

export default icon;
