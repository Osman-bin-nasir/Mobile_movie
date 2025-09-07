import {Text, View, Image, Animated, ActivityIndicator, ScrollView, FlatList} from "react-native";
import { useRouter } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import MovieCard from "@/components/MovieCard";

export default function Index() {
    const router = useRouter();

    const {
        data: movies,
        loading: moviesLoading,
        error: moviesError,
    } = useFetch(() =>
        fetchMovies({
            query: "",
        })
    );

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <View className="flex-1 bg-primary text-white">
            <Image source={images.bg} className="absolute w-full z-0" />
            <ScrollView
                className="flex-1 px-5"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ minHeight: "100%", padding: 10 }}
            >
                <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

                {moviesLoading ? (
                    <View className="mt-10 self-center">
                        <ActivityIndicator size="large" color="white" />
                    </View>
                ) : moviesError ? (
                    <Text className="text-red-500">Error: {moviesError?.message}</Text>
                ) : (
                    <View>
                        <SearchBar
                            onPress={() => router.push("/search")}
                            placeholder="Search for a Movie"
                        />
                        <>
                        <Text className="text-lg text-white font-bold mt-5 mb-3">
                            Latest Movies
                        </Text>
                            <FlatList
                                data={movies}
                                renderItem={({ item }) => <MovieCard {...item} />}   // ✅ Pass props correctly
                                keyExtractor={(item) => item.id.toString()}
                                numColumns={3}
                                columnWrapperStyle={{
                                    justifyContent: "flex-start",
                                    gap: 20,
                                    paddingRight: 5,
                                    marginHorizontal: 10,
                                }}
                                className="mt-2 pb-32"
                                scrollEnabled={false}
                            />

                        </>
                    </View>
                )}
            </ScrollView>
        </View>
    );
}
