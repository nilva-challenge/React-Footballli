 

import { Collapse, Space } from 'antd';
// import { useGetFixturesQuery } from '../../../../api';

const { Panel } = Collapse;


 

export const TabContent = ( ) => {
    // const fixtures = useGetFixturesQuery('2023-01-04');

 
    return ( 
    <div className="tabContent">

        <Space  direction="vertical" size='large'>
            <Collapse  destroyInactivePanel={false}  defaultActiveKey={['1']}>
                <Panel header='لیگ برتر' key="1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatibus quia animi iusto saepe, fugit consequuntur id excepturi vel dicta culpa maiores reiciendis sapiente cum, nam aut doloribus tempore asperiores!</p>
                </Panel>
            </Collapse>

            <Collapse destroyInactivePanel={false}  defaultActiveKey={['1']}>
                <Panel header='لیگ جزیره' key="1">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatibus quia animi iusto saepe, fugit consequuntur id excepturi vel dicta culpa maiores reiciendis sapiente cum, nam aut doloribus tempore asperiores!</p>
                </Panel>
            </Collapse>

            <Collapse destroyInactivePanel={false} >
                <Panel header='لیگ جزیره' key="1">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatibus quia animi iusto saepe, fugit consequuntur id excepturi vel dicta culpa maiores reiciendis sapiente cum, nam aut doloribus tempore asperiores!</p>
                </Panel>
            </Collapse>
        </Space>

    </div>
    );
};
