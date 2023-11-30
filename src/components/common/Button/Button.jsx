import { Btn } from './Button.styled';

const Button = ({
  style,
  children,
  onClick = () => {
    console.log('hi');
  },
}) => {
  return (
    <Btn style={style} type="button" onClick={onClick}>
      {children}
    </Btn>
  );
};

export default Button;
