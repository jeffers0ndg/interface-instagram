import React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

import options from '../../../assets/options.png';
import like from '../../../assets/like.png';
import comment from '../../../assets/comment.png';
import send from '../../../assets/send.png';
import save from '../../../assets/save.png';

export default function Feed() {

  const posts = [
    {
      id: '1',
      author: 'brn.dev',
      picture_url: 'https://instagram.fjdo2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/108142913_646270062904659_6621354654307902963_n.jpg?_nc_ht=instagram.fjdo2-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=1xyz0atSM7EAX-I4trP&oh=f82fea909d31d2ae96b3dd13315a7678&oe=5F373142',
      likes: 248,
      description: 'ESP8266 NodeMCU',
      hashtags: '#esp8266 #arduino #ufrn',
      place: 'Caico, RN'
    },
    {
      id: '2',
      author: 'campuspartybra',
      picture_url: 'https://instagram.fjdo2-1.fna.fbcdn.net/v/t51.2885-15/e35/108968837_762704014489088_1700903338321782995_n.jpg?_nc_ht=instagram.fjdo2-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=8G96C_bmuioAX_alBhh&oh=d625df9c507cbe79c1da702d0873ec75&oe=5F393541',
      likes: 3.456,
      description: 'A Vigilância em Saúde continua o seu trabalho de higienização do comércio municipal e assim garantindo a prevenção de todos contra o COVID-19, desde já a Prefeitura Municipal Agradece a parceria',
      hashtags: '#cpdigitalbsb #cpde #RebootTheWorld',
      place: 'São Paulo, SP'
    },
    {
      id: '3',
      author: 'unifipoficial',
      picture_url: 'https://instagram.fjdo2-1.fna.fbcdn.net/v/t51.2885-15/e35/108216059_1271197849893036_2651060911922653587_n.jpg?_nc_ht=instagram.fjdo2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=6dTtGa_JuwEAX8GA4F6&oh=916aa911c63c3d87433f069b8be39794&oe=5F36FEF6',
      likes: 1.498,
      description: 'Tão grande quanto a busca das pessoas por uma vida saudável é a evolução da Nutrição Esportiva.',
      hashtags: '#unifip #nutri',
      place: 'Patos, Paraiba'
    },
  ];

  function renderItem({ item: post }) {
    return (
      <View style={styles.post}>

        <View style={styles.postHeader}>
          <View style={styles.userInfo}>
            <Text style={styles.author}>{post.author}</Text>
            <Text style={styles.place}>{post.place}</Text>
          </View>

          <View style={styles.postOptions}>
            <TouchableOpacity>
              <Image source={options} />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Image
            style={styles.picture_url}
            source={{ uri: post.picture_url }}
          />
        </View>

        <View style={styles.footer}>
          <View style={styles.actions}>
            <View style={styles.leftActions}>
              <TouchableOpacity style={styles.action}>
                <Image source={like} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.action}>
                <Image source={comment} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={send} />
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <Image source={save} />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.likes}>{post.likes} likes</Text>
            <Text style={styles.hashtags}>{post.hashtags}</Text>
            <Text style={styles.description}>{post.description}</Text>
          </View>
        </View>

      </View>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  post: {
    marginVertical: 15
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: 15
  },
  postOptions: {},
  userInfo: {},
  author: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold'
  },
  place: {
    fontSize: 12,
    color: '#666'
  },
  picture_url: {
    width: '100%',
    height: 400
  },
  footer: {
    paddingHorizontal: 15
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15
  },
  action: {
    marginRight: 8
  },
  leftActions: {
    flexDirection: 'row'
  },
  likes: {
    fontWeight: 'bold',
    fontSize: 12
  },
  hashtags: {
    color: '#002D5E'
  },
  description: {
    color: '#000',
    lineHeight: 18
  }
});