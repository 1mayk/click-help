import * as AiIcons from "react-icons/ai";
import { Container } from "./styles";

interface IProps {
  value: boolean;
}

function ShowPasswordIcon(props: IProps) {
  return (
    <Container>
      {props.value ? (
        <AiIcons.AiFillEyeInvisible className="iconPSS" />
      ) : (
        <AiIcons.AiFillEye className="iconPSS" />
      )}
    </Container>
  );
}

export default ShowPasswordIcon;
