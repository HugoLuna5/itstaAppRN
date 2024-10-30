import {View, Text, Image, Pressable, FlatList, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderText from './../components/HeaderText';
import {images} from '../assets';
import {
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';
import {themeColors} from '../theme';
import {institutionData, teacherData, careers} from '../assets/data/data';
import InstitutionItem from '../components/Home/InstitutionItem';
import AreaFilter from '../components/Home/AreaFilter';
import SectionHeader from '../components/Home/SectionHeader';
import CareersItem from '../components/Home/CareersItem';
import SearchInput from '../components/Home/SearchInput';
import {helpers} from '../utils/helpers';

const {avatar} = images;

import {newsService} from '../services/news';
import ProgressDialog from '../components/ProgressDialog';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [careersFilterVisible, setCareersFilterVisible] = useState(false);
  const [institutionsFilterVisible, setInstitutionsFilterVisible] =
    useState(false);

  const [loading, setLoading] = useState(false);
  const [newsCategories, setNewsCategories] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [careersData, setCareersData] = useState(careers);
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    handleGetInfo();
    handleGetNews();
  }, []);

  const handleGetInfo = async () => {
    const fullName = 'Hardline Scott';
    setFullName(fullName);
  };

  const handleGetNews = async () => {
    setLoading(true);

    newsService
      .getNewsCategory()
      .then((dataCat: any) => {
        if (dataCat) {
          setNewsCategories(dataCat);
          newsService
            .getNews()
            .then((data: any) => {
              if (data) {
                setNewsData(data);
              }
              setLoading(false);
            })
            .catch((error: any) => {
              setLoading(false);
              console.log(error);
            });
        }
      })
      .catch((error: any) => {
        setLoading(false);
      });
  };

  /**
   * @description Function to toggle the teachers filter visibility
   */
  const toggleCareersFilter = () => {
    setCareersFilterVisible(!careersFilterVisible);
  };

  /**
   * @description Function to toggle the institutions filter visibility
   */
  const toggleInstitutionsFilter = () => {
    setInstitutionsFilterVisible(!institutionsFilterVisible);
  };

  /**
   * @description handles search for teachers and institutions
   * @param {*} searchQuery
   */
  const handleSearchChange = searchQuery => {
    setSearchQuery(searchQuery);
    setCareersFilterVisible(false);
    setInstitutionsFilterVisible(false);

    // set query to lowercase
    const lowerCaseQuery = searchQuery.toLowerCase();

    // Filter teachers based on the search query
    const filteredTeachers = teacherData.filter(teacher =>
      teacher.name.toLowerCase().includes(lowerCaseQuery),
    );

    // Filter institutions based on the search query
    const filteredInstitutions = institutionData.filter(institution =>
      institution.name.toLowerCase().includes(lowerCaseQuery),
    );
  };

  /**
   * @description Function to filter teachers based on the selected subject
   * @param {*} subject
   */
  const filterTeachersBySubject = subject => {
    // Filter the teachers based on the selected subject
  };

  return (
    <SafeAreaView className="bg-bgWhite px-7 pt-5 pb-[-35px] flex-1">
      {/**============= Header Area =================== */}
      <View className="flex flex-row items-center justify-between">
        <View className="">
          {/** Get greeting based on current time */}
          <HeaderText text={helpers.getLocalGreeting()} />
          <Text className="font-exo font-semibold text-lg">{fullName}</Text>
        </View>
        {/** ============= Profile image/avatar ============ */}
        <View className="bg-bgWhite shadow-xl rounded-xl">
          <Image source={avatar} style={{height: 62, width: 62}} />
        </View>
      </View>
      {/** ================ Search Input  ========================= */}
      <View className="flex flex-row items-center justify-between my-7">
        <View className="flex-1">
          <SearchInput
            placeholder={'Buscar...'}
            value={searchQuery}
            onChange={handleSearchChange}
            Icon={MagnifyingGlassIcon}
          />
        </View>
        {/** ==================== Filter Icon ================================= */}
        <Pressable className="ml-3">
          <AdjustmentsVerticalIcon size={28} color={themeColors.darkGrayText} />
        </Pressable>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className=" h-full w-full">
        {/** ========================= Careers Section =========================== */}
        <View className="mt-2">
          <SectionHeader
            title={'Carreras'}
            onFilterPress={() => {
              setCareersData(
                careersData.sort((a, b) =>
                  careersFilterVisible ? a.id - b.id : b.id - a.id,
                ),
              );
              toggleCareersFilter();
            }}
            tintColor={
              careersFilterVisible
                ? themeColors.bgPurple
                : themeColors.lightGrayText
            }
          />

          {/** ========================= Render List of Teachers =========================== */}

          <FlatList
            data={careers}
            horizontal={true}
            className="w-full py-4 bg-transparent"
            renderItem={({item}) => <CareersItem career={item} />}
            keyExtractor={(item, index) => `career-${index}`}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/** ========================= POSTs Section =========================== */}
        <View className="mt-2">
          <SectionHeader
            title={'Publicaciones recientes'}
            onFilterPress={toggleInstitutionsFilter}
            tintColor={
              institutionsFilterVisible
                ? themeColors.bgPurple
                : themeColors.lightGrayText
            }
          />

          {/**============== Institution Filters ==================== */}
          {institutionsFilterVisible ? (
            <View className="flex flex-col mt-5 space-y-2">
              <AreaFilter filters={newsCategories} />
            </View>
          ) : null}

          {/** ========================= Render List of institutions =========================== */}
          <View
            className={`w-full bg-transparent ${
              institutionsFilterVisible ? 'pt-0' : 'pt-4'
            }`}>
            {newsData.map((news, index) => (
              <InstitutionItem
                news={news}
                categories={newsCategories}
                key={`news-${index}`}
              />
            ))}
          </View>
        </View>

        <ProgressDialog isOpen={loading} />
      </ScrollView>
    </SafeAreaView>
  );
}
