import { Platform } from "react-native";

export const currentBaseUrl = Platform.OS == 'web' ? 'https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?apiKey=28d38df90e1741a5ba95d0a7d8a27054' : 'https://newsapi.org/v2/everything?apiKey=28d38df90e1741a5ba95d0a7d8a27054'