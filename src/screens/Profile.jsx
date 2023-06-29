import { auth } from "../firebase";
import RelativeContainer from "../components/styled/Containers/RelativeContainer";
import AbsoluteCenterContainer from "../components/styled/Containers/AbsoluteCenterContainer";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import H1Text from "../components/styled/Text/H1Text";
import BlackTransparentContainer from "../components/styled/Containers/BlackTransparentContainer";
import StraightLineGray from "../components/styled/Stylish/StraightLineGray";
import SeparatedContainer from "../components/styled/Containers/SeparatedContainer";
import AvatarGeneral from "../components/styled/General/AvatarGeneral";
import H3Text from "../components/styled/Text/H3Text";
import ButtonForm from "../components/styled/Form/ButtonForm";

const Profile = () => {
  const user = useSelector(selectUser);

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <RelativeContainer>
      <AbsoluteCenterContainer>
        <BlackTransparentContainer>
          <H1Text>Your Profile</H1Text>
          <StraightLineGray />
          <SeparatedContainer>
            <AvatarGeneral
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
              $huge
            />
            <div>
              <H3Text>Thank You For Visiting!</H3Text>
              <H3Text>Email: {user.email}</H3Text>
            </div>
          </SeparatedContainer>
          <StraightLineGray />
        <ButtonForm $fullWidth onClick={signOut}>Sign out</ButtonForm>
        </BlackTransparentContainer>
      </AbsoluteCenterContainer>
    </RelativeContainer>
  );
};

export default Profile;
