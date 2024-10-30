import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Rating from './Rating';
import {newsService} from '../../services/news';
import RenderHTML from 'react-native-render-html';

const InstitutionItem = ({news, categories}) => {
  const [imageNews, setImageNews] = useState(
    'https://itsta.edu.mx/wp-content/uploads/2019/01/home_itsta_slider_bg.jpg',
  );

  useEffect(() => {
    getThumbnail(news.featured_media);
  }, [news]);

  const getThumbnail = async (mediaId: string) => {
    newsService
      .getThumbnail(mediaId)
      .then((data: any) => {
        if (data) {
          setImageNews(data.guid.rendered);
        } else {
          setImageNews(
            'https://itsta.edu.mx/wp-content/uploads/2019/01/home_itsta_slider_bg.jpg',
          );
        }
      })
      .catch((error: any) => {
        setImageNews(
          'https://itsta.edu.mx/wp-content/uploads/2019/01/home_itsta_slider_bg.jpg',
        );
      });
  };

  const handleGetContent = (): string => {
    let content = news.excerpt.rendered;

    content = removeAllOccurrences(content, '[vc_row]');

    content = removeAllOccurrences(content, '[/vc_row]');

    content = removeAllOccurrences(content, '[vc_column]');

    content = removeAllOccurrences(content, '[/vc_column]');

    content = removeAllOccurrences(content, '[vc_row_inner]');

    content = removeAllOccurrences(content, '[/vc_row_inner]');

    content = removeAllOccurrences(content, '[vc_column_text]');

    content = removeAllOccurrences(content, '[/vc_column_text]');

    content = removeVcGallery(content);

    return content.length > 100 ? `${content.slice(0, 100)}...` : content;
  };

  const removeVcGallery = (str: string): string => {
    const startIndex = str.indexOf('[vc_gallery');
    const endIndex = str.indexOf(']', startIndex);

    if (startIndex !== -1 && endIndex !== -1) {
      return str.slice(0, startIndex) + str.slice(endIndex + 1);
    }
    return str;
  };

  const removeAllOccurrences = (str: string, textToRemove: string): string => {
    return str.split(textToRemove).join('');
  };

  const handleGetTitle = (): string => {
    return news.title.rendered.length > 14
      ? `${news.title.rendered.slice(0, 14)}...`
      : news.title.rendered;
  };

  const handleGetCategory = (): string => {
    return categories.filter((c: any) => c.id === news.categories[0])[0].name;
  };

  const handleGetCount = (): number => {
    return categories.filter((c: any) => c.id === news.categories[0])[0].count;
  };

  return (
    <View className="bg-white rounded-xl flex flex-row w-full min-h-[176px] max-h-[176px] items-center justify-between p-2 mb-4 shadow">
      {/**============== Institution Image ================ */}
      <View className="rounded-xl">
        <Image
          source={{uri: imageNews}}
          style={{height: 150, width: 140}}
          className="rounded-xl"
          resizeMode="cover"
        />
      </View>

      {/**============== Institution information ================ */}
      <View className="w-[52%] h-full flex-col flex space-y-1 py-2">
        <Text className="font-exoSemibold text-darkGrayText text-xl capitalize truncate text-clip overflow-hidden">
          {handleGetTitle()}
        </Text>

        {/**============== Rating and reviews ================ */}
        <View className="flex flex-row items-center space-x-2">
          <Rating rating={5} />
          <Text className="font-roboto text-darkGrayText text-xs text-left">
            {`(${handleGetCount()})`}
          </Text>
        </View>
        <View className="flex flex-col space-y-1">
          <Text className="font-robotoBold text-darkGrayText text-sm capitalize">
            {handleGetCategory()}
          </Text>

          <RenderHTML
            baseStyle={{fontSize: 12, fontFamily: 'roboto'}}
            contentWidth={300} // Set to your container width
            ignoredDomTags={[
              'script',
              'style',
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
            ]}
            source={{html: handleGetContent()}}
          />
        </View>
      </View>
    </View>
  );
};

export default InstitutionItem;
