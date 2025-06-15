// Utility functions for localStorage operations

export const saveUserData = (email, password, additionalData = {}) => {
  try {
    const userData = {
      password,
      ...additionalData,
      createdAt: new Date().toISOString()
    }
    localStorage.setItem(email, JSON.stringify(userData))
    return true
  } catch (error) {
    console.error('Error saving user data:', error)
    return false
  }
}

export const getUserData = (email) => {
  try {
    const userData = localStorage.getItem(email)
    return userData ? JSON.parse(userData) : null
  } catch (error) {
    console.error('Error getting user data:', error)
    return null
  }
}

export const saveHRData = (email, userData) => {
  try {
    const hrKey = `hr_${email}`
    const hrData = {
      ...userData,
      createdAt: new Date().toISOString()
    }
    localStorage.setItem(hrKey, JSON.stringify(hrData))
    return true
  } catch (error) {
    console.error('Error saving HR data:', error)
    return false
  }
}

export const getHRData = (email) => {
  try {
    const hrKey = `hr_${email}`
    const hrData = localStorage.getItem(hrKey)
    return hrData ? JSON.parse(hrData) : null
  } catch (error) {
    console.error('Error getting HR data:', error)
    return null
  }
}

export const saveApplications = (userEmail, applications) => {
  try {
    localStorage.setItem(userEmail, JSON.stringify(applications))
    return true
  } catch (error) {
    console.error('Error saving applications:', error)
    return false
  }
}

export const getApplications = (userEmail) => {
  try {
    const applications = localStorage.getItem(userEmail)
    return applications ? JSON.parse(applications) : []
  } catch (error) {
    console.error('Error getting applications:', error)
    return []
  }
}

export const clearUserSession = () => {
  try {
    sessionStorage.removeItem('loggedInUserEmail')
    sessionStorage.removeItem('loggedInHREmail')
    sessionStorage.removeItem('loggedInHRName')
    return true
  } catch (error) {
    console.error('Error clearing session:', error)
    return false
  }
}