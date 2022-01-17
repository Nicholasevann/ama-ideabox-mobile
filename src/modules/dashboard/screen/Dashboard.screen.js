import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {BarChart, LineChart} from 'react-native-chart-kit';
import DropDownPicker from 'react-native-dropdown-picker';
import CardDashboard from '../../../components/CardDashboard';
import SearchHeader from '../../../components/SearchHeader';
import {windowWidth} from '../../../components/WindowDimensions';
import style from '../../../config/Style/style.cfg';
import styles from '../style/Dashboard.style';

const Dashboard = ({navigation}) => {
  // dropdown
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  //chart
  const dataChart = {
    labels: [
      "CEO'S-OFFICE",
      'CFU-CONSUMER',
      'CFU-DIGSERV',
      'CFU-ETREPISE',
      'CFU-MOBILE',
    ],
    datasets: [
      {
        data: [20, 45, 28, 80, 99],
      },
    ],
  };
  const chartConfig = {
    backgroundGradientFrom: '#0B87B1',
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: '#085D7A',
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `white`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelSize: () => 5,
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchHeader
        onPress={() => navigation.openDrawer()}
        notification={() => navigation.navigate('Notification')}
        placeholder={'Search an Event ... '}
      />
      <ScrollView style={styles.content}>
        <Text style={[style.h4, {color: '#085D7A'}]}>
          Monitoring Dashboard Report
        </Text>
        <View style={{flexDirection: 'row'}}>
          <CardDashboard
            icon={require('../../../assets/icon/iconTotalIdea.png')}
            total={2131}
            item={'Idea'}
            marginRight={10}
          />
          <CardDashboard
            icon={require('../../../assets/icon/iconTotalTalent.png')}
            total={1121}
            item={'Talent'}
          />
        </View>
        <View style={styles.contentChart}>
          <View style={styles.titleChart}>
            <Text style={[style.h4, {color: '#085D7A'}]}>Chart By</Text>
            <View style={styles.input}>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={styles.dropdown}
                placeholder="All Event"
              />
            </View>
          </View>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={styles.headerWrap}>
              <TouchableOpacity style={styles.wrap} onPress={() => {}}>
                <View style={styles.tabBarActive}>
                  <Text style={styles.textActive}>Submitted Idea</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.wrap} onPress={() => {}}>
                <View style={styles.tabBar}>
                  <Text style={styles.textNonActive}>My Action</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Bezier Line Chart</Text>
            <BarChart
              data={dataChart}
              width={windowWidth} // from react-native
              height={300}
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#ffa726',
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
            {/* <BarChart
              data={dataChart}
              width={windowWidth}
              height={260}
              yAxisLabel="$"
              chartConfig={chartConfig}
              style={{}}
            /> */}

            <Text>
              VirtualizedList: You have a large list that is slow to update -
              make sure your renderItem function renders components that follow
              React performa
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
