import {View, Text, Image, Pressable, FlatList, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderText from './../components/HeaderText';
import {images} from '../assets';
import {
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';
import {themeColors} from '../theme';
import {
  areaFilters,
  institutionData,
  subjectFilters,
  teacherData,
} from '../assets/data/data';
import InstitutionItem from '../components/Home/InstitutionItem';
import AreaFilter from '../components/Home/AreaFilter';
import SectionHeader from '../components/Home/SectionHeader';
import TeacherItem from '../components/Home/TeacherItem';
import SubjectFilter from '../components/Home/SubjectFilter';
import SearchInput from '../components/Home/SearchInput';
import {helpers} from '../utils/helpers';

const {avatar} = images;

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [teachers, setTeachers] = useState(teacherData);
  const [institutions, setInstitutions] = useState(institutionData);
  const [SelectedSubject, setSelectedSubject] = useState();
  const [teachersFilterVisible, setTeachersFilterVisible] = useState(false);
  const [institutionsFilterVisible, setInstitutionsFilterVisible] =
    useState(false);

  /**
   * @description Function to toggle the teachers filter visibility
   */
  const toggleTeachersFilter = () => {
    setTeachersFilterVisible(!teachersFilterVisible);
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
    setTeachersFilterVisible(false);
    setInstitutionsFilterVisible(false);

    // set query to lowercase
    const lowerCaseQuery = searchQuery.toLowerCase();

    // Filter teachers based on the search query
    const filteredTeachers = teacherData.filter(teacher =>
      teacher.name.toLowerCase().includes(lowerCaseQuery),
    );
    setTeachers(filteredTeachers);

    // Filter institutions based on the search query
    const filteredInstitutions = institutionData.filter(institution =>
      institution.name.toLowerCase().includes(lowerCaseQuery),
    );
    setInstitutions(filteredInstitutions);
  };

  /**
   * @description Function to filter teachers based on the selected subject
   * @param {*} subject
   */
  const filterTeachersBySubject = subject => {
    setSelectedSubject(subject);

    // Filter the teachers based on the selected subject
    if (subject.toLowerCase() === 'all subjects') {
      setTeachers(teacherData); // Show all teachers when 'All Subjects' is selected
    } else if (subject.toLowerCase() === 'science for technology') {
      setTeachers(teacherData);
    } else {
      const filteredTeachers = teacherData.filter(
        teacher => teacher.subject.toLowerCase() === subject.toLowerCase(),
      );
      setTeachers(filteredTeachers);
    }
  };

  return (
    <SafeAreaView className="bg-bgWhite px-7 pt-5 pb-[-35px] flex-1">
      {/**============= Header Area =================== */}
      <View className="flex flex-row items-center justify-between">
        <View className="">
          {/** Get greeting based on current time */}
          <HeaderText text={helpers.getLocalGreeting()} />
          <Text className="font-exo font-semibold text-lg">Hardline Scott</Text>
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
            placeholder={'Search'}
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
        {/** ========================= Teachers Section =========================== */}
        <View className="mt-2">
          <SectionHeader
            title={'Popular Teachers'}
            onFilterPress={toggleTeachersFilter}
            tintColor={
              teachersFilterVisible
                ? themeColors.bgPurple
                : themeColors.lightGrayText
            }
          />

          {/**============== Teacher Filters ==================== */}
          {teachersFilterVisible ? (
            <View className="flex flex-col my-5 space-y-2">
              <AreaFilter filters={areaFilters} />
              <SubjectFilter
                filters={subjectFilters}
                onSubjectSelect={filterTeachersBySubject}
              />
            </View>
          ) : null}

          {/** ========================= Render List of Teachers =========================== */}

          <FlatList
            data={teachers}
            horizontal={true}
            className="w-full py-4 bg-transparent"
            renderItem={({item}) => <TeacherItem teacher={item} />}
            keyExtractor={(item, index) => item.name}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/** ========================= Institutions Section =========================== */}
        <View className="mt-2">
          <SectionHeader
            title={'Popular Institutions'}
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
              <AreaFilter filters={areaFilters} />
            </View>
          ) : null}

          {/** ========================= Render List of institutions =========================== */}
          <View
            className={`w-full bg-transparent ${
              institutionsFilterVisible ? 'pt-0' : 'pt-4'
            }`}>
            {institutions.map((institution, index) => (
              <InstitutionItem institution={institution} key={index} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
