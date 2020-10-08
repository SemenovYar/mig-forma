<template>
<div class="m-form">
  <h1>Сведения о принимающей стороне</h1>
  <form class="m-form__data" action="">
    <label for="lastName">Фамилия: </label>
    <input v-model="lastName" type="text" id="lastName">
    <label for="firstName">Имя и Отчество(при наличии): </label>
    <input v-model="firstName" type="text" id="firstName">
    <label for="dateOfBirth">Дата рождения: </label>
    <input v-model="dateOfBirth" type="date" id="dateOfBirth">
    <label for="phoneNumber">Номер телефона: </label>
    <input v-model="phoneNumber" type="tel" id="phoneNumber">
    <fieldset>
      <label for="organization">Организация: </label>
      <input type="radio" id="organization" value="organization" v-model="picked">
      <label for="privateHuman">Физ. лицо: </label>
      <input type="radio" id="privateHuman" value="privateHuman" v-model="picked">
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
    <h3>Сведения о месте регистрации (прописка)</h3>
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
    passport: '',
    passportSeries: '',
    passportNumber: '',
    passportDateAssigned: '',
    passportDateOfEnd: '',
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