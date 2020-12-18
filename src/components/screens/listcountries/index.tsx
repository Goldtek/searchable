import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';


const ListCountries = () => {
    const [data, setData] = useState([]);
    const [arrayholder, setArray] = useState([]);
    const [text, setText] = useState([]);

    const  renderSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: '86%',
              backgroundColor: '#CED0CE',
              marginLeft: '14%',
            }}
          />
        );
      };
    
         const searchFilterFunction = text as string =>  setText(text);
    
        const newData = arrayholder.filter(item => {
          const itemData = `${item.name.title.toUpperCase()} ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
          const textData = text.toUpperCase();
    
          return itemData.indexOf(textData) > -1;
        });
        // this.setState({
        //   data: newData,
        // });
      };
    
      const renderHeader = () => {
        return (
          <SearchBar
            placeholder="Type Here..."
            lightTheme
            round
            onChangeText={text => searchFilterFunction(text)}
            autoCorrect={false}
            value={this.state.value}
          />
        );
      };
    return (
        <View style={{ flex: 1 }}>
            <FlatList
            data={data}
            renderItem={({ item }) => (
                <ListItem
                leftAvatar={{ source: { uri: item.picture.thumbnail } }}
                title={`${item.name.first} ${item.name.last}`}
                subtitle={item.email}
                />
            )}
            keyExtractor={item => item.email}
            ItemSeparatorComponent={renderSeparator}
            ListHeaderComponent={renderHeader}
            />
      </View>
    )
}