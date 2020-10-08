<template>
<div class="m-form">
  <h1>Сведения о лице, подлежащем постановке на учет по месту пребывания</h1>
  <form class="m-form__data" action="">
    <label for="lastName">Фамилия: </label>
    <input v-model="lastName" type="text" id="lastName">
    <label for="firstName">Имя и Отчество(при наличии): </label>
    <input v-model="firstName" type="text" id="firstName">
    <label for="nationality">Гражданство: </label>
    <input v-model="nationality" type="text" id="nationality">
    <label for="dateOfBirth">Дата рождения: </label>
    <input v-model="dateOfBirth" type="date" id="dateOfBirth">
    <label for="phoneNumber">Номер телефона: </label>
    <input v-model="phoneNumber" type="tel" id="phoneNumber">
    <fieldset>
      <legend>Пол: </legend>
      <label for="male">М: </label>
      <input type="radio" id="male" value="male" v-model="picked">
      <label for="famale">Ж: </label>
      <input type="radio" id="famale" value="famale" v-model="picked">
    </fieldset>
    <fieldset>
      <legend>Место рождения</legend>
      <label for="countryOfBirth">Государство: </label>
      <input v-model="countryOfBirth" type="text" id="countryOfBirth">
      <label for="cityOfBirth">Город или другой населенный пункт: </label>
      <input v-model="cityOfBirth" type="text" id="cityOfBirth">
    </fieldset>
    <fieldset>
      <legend>Документ, удостоверяющий личность:</legend>
      <label for="passport">Вид: </label>
      <input v-model="passport" type="text" id="passport">
      <label for="passportSeries">Серия: </label>
      <input v-model="passportSeries" type="text" id="passportSeries">
      <label for="passportNumber">Номер: </label>
      <input v-model="passportNumber" type="text" id="passportNumber">
      <label for="passportDateAssigned">Дата выдачи: </label>
      <input v-model="passportDateAssigned" type="date" id="passportDateAssigned">
      <label for="passportDateOfEnd">Срок действия: </label>
      <input v-model="passportDateOfEnd" type="date" id="passportDateOfEnd">
    </fieldset>
    <fieldset v-show="isTrueDateOfEnd">
      <legend>Заполняется в случае ограничения срока действия документа</legend>
      <fieldset>
        <legend>Цель въезда: </legend>
        <label for="officialPurpose">Служебная: </label>
        <input type="radio" id="officialPurpose" value="officialPurpose" v-model="picked">
        <label for="tourismPurpose">Туризм: </label>
        <input type="radio" id="tourismPurpose" value="tourismPurpose" v-model="picked">
        <label for="businessPurpose">Деловая: </label>
        <input type="radio" id="businessPurpose" value="businessPurpose" v-model="picked">
        <label for="educationPurpose">Учеба: </label>
        <input type="radio" id="educationPurpose" value="educationPurpose" v-model="picked">
        <label for="workPurpose">Работа: </label>
        <input type="radio" id="workPurpose" value="workPurpose" v-model="picked">
        <label for="privatePurpose">Частная: </label>
        <input type="radio" id="privatePurpose" value="privatePurpose" v-model="picked">
        <label for="transitPurpose">Транзит: </label>
        <input type="radio" id="transitPurpose" value="transitPurpose" v-model="picked">
        <label for="humanitarianPurpose">Гуманитарная: </label>
        <input type="radio" id="humanitarianPurpose" value="humanitarianPurpose" v-model="picked">
        <label for="anyPurpose">Другая: </label>
        <input type="radio" id="anyPurpose" value="anyPurpose" v-model="picked">
      </fieldset>
      <label for="profession" v-show="isTrueWorkPurpose">Профессия: </label>
      <input v-model="profession" type="text" id="profession" v-show="isTrueWorkPurpose">
    </fieldset>
    <h3>Сведения о месте пребывания</h3>
    <fieldset>
      <label for="regionOfResidence">Область, край, республика, автономный округ: </label>
      <input v-model="regionOfResidence" type="text" id="regionOfResidence">
      <label for="areaOfResidence">Район: </label>
      <input v-model="areaOfResidence" type="text" id="areaOfResidence">
      <label for="cityOfResidence">Город или другой населённый пункт: </label>
      <input v-model="cityOfResidence" type="text" id="cityOfResidence">
      <label for="streetOfResidence">Улица: </label>
      <input v-model="streetOfResidence" type="text" id="streetOfResidence">
    </fieldset>
    <fieldset>
      <label for="houseOfResidence">Дом, участок, владение и иное: </label>
      <input v-model="houseOfResidence" type="text" id="houseOfResidence">
      <label for="numberOfHouse">№: </label>
      <input v-model="numberOfHouse" type="text" id="numberOfHouse">
      <label for="numberOfHousing" v-show="isTrueChecked">Корпус: </label>
      <input v-model="numberOfHousing" type="text" id="numberOfHousing" v-show="isTrueChecked">
      <label for="numberOfBuilding" v-show="isTrueChecked">Строение: </label>
      <input v-model="numberOfBuilding" type="text" id="numberOfBuilding" v-show="isTrueChecked">
      <label for="roomOfResidence">Квартира, комната, офис и т. д.: </label>
      <input v-model="roomOfResidence" type="text" id="roomOfResidence">
      <label for="numberOfRoom">№: </label>
      <input v-model="numberOfRoom" type="text" id="numberOfRoom">

    </fieldset>
  </form>
</div>
</template>

<script>
export default {
name: "m-forms",
  data(){
  return {
    lastName: '',
    firstName: '',
    nationality: '',
    dateOfBirth: '',
    phoneNumber: '',
    picked: '',
    countryOfBirth: '',
    cityOfBirth: '',
    passport: '',
    passportSeries: '',
    passportNumber: '',
    passportDateAssigned: '',
    passportDateOfEnd: '',
    profession: '',
    regionOfResidence: '',
    areaOfResidence: '',
    cityOfResidence: '',
    streetOfResidence: '',
    houseOfResidence: '',
    numberOfHouse: '',
    numberOfHousing: '',
    numberOfBuilding: '',
    roomOfResidence: '',
    numberOfRoom: '',

  }
  },
  computed: {
  isTrueWorkPurpose(){
  if(this.picked === 'workPurpose'){
    return true
  }
    else return false
  },
    isTrueDateOfEnd(){
    if(this.passportDateOfEnd !== ''){
      return true
    }
    else return false
    },
    isTrueChecked(){
    return false
    }
  }
}
</script>

<style lang="scss">
.m-form{
  background: wheat;
  outline: solid 1px black;
  width: 50%;
  &__data{
    display: flex;
    align-items: baseline;
    flex-direction: column;
    margin-left: 20px;
  }
  fieldset{
    display: flex;
    width: 300px;
  }
  input, label{
    text-align: left;
  }
}
</style>