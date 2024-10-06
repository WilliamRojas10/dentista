export const calculateAge = (dateString) => { //2020-10-01
    const birthday = new Date(dateString);
    const today = new Date();
  
    let age = today.getFullYear() - birthday.getFullYear();
    const monthDifference = today.getMonth() - birthday.getMonth();
  
    // Si el mes del cumpleaños es posterior al mes actual, o si el mes es el mismo pero el día no ha llegado
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthday.getDate())) {
      age--;
    } 
    return age;
  };