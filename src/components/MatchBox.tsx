import { Flex, Grid, Image } from "@mantine/core";
import { digitsEnToFa } from "@persian-tools/persian-tools";

interface IMatchBox {
  homeName: string;
  homeLogo: string;
  awayName: string;
  awayLogo: string;
  time: string;
}
const MatchBox = ({
  homeName,
  homeLogo,
  awayName,
  awayLogo,
  time,
}: IMatchBox) => {
  return (
    <Grid justify="center" align="center" fz={"0.8rem"}>
      <Grid.Col span="auto">
        <Flex align={"center"} justify={"flex-end"} gap={"0.5rem"}>
          <span>{homeName}</span>
          <Image w={"2rem"} h={"2rem"} src={homeLogo} />
        </Flex>
      </Grid.Col>
      <Grid.Col span="content">
        <Flex align={"center"} justify={"center"}>
          <span>{digitsEnToFa(time)}</span>
        </Flex>
      </Grid.Col>
      <Grid.Col span="auto">
        <Flex align={"center"} justify={"flex-start"}>
          <Image w={"2rem"} h={"2rem"} src={awayLogo} />
          <span>{awayName}</span>
        </Flex>
      </Grid.Col>
    </Grid>
  );
};
export default MatchBox;
