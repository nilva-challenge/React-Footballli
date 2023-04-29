import { Tabs } from "antd";


const MatchPage = () => {
    return ( <Tabs
        defaultActiveKey="1"
        tabPosition='top'
        style={{ height: 220 }}
        items={new Array(30).fill(null).map((_, i) => {
          const id = String(i);
          return {
            label: `Tab-${id}`,
            key: id,
            disabled: i === 28,
            children: `Content of tab ${id}`,
          };
        })}
      /> );
}
 
export default MatchPage;