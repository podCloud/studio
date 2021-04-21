import React from "react";
import { Layout, List, ListItem, Text } from "@ui-kitten/components";

import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, RefreshControl, StyleSheet } from "react-native";

import { ScrollView } from "react-native-gesture-handler";

import { gql, useQuery, QueryResult } from "@apollo/client";

const styles = StyleSheet.create({
  view: { flex: 1 },
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    margin: 50,
  },
  list: {
    flex: 1,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    margin: 20,
    marginBottom: 0,
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#ecf0f1",
  },
});

type User = {
  login: string;
};

type Repository = {
  name: string;
  owner: User;
  // eslint-disable-next-line camelcase
  stargazers_count: number;
};

type FeedsQueryItem = { repository: Repository; postedBy: User };

type FeedsQueryResult = {
  feed: [FeedsQueryItem];
};

const GET_FEEDS_QUERY = gql`
  {
    feed(type: TOP, limit: 10) {
      repository {
        name
        owner {
          login
        }

        # Uncomment the line below to get number of stars!
        stargazers_count
      }

      postedBy {
        login
      }
    }
  }
`;

type FeedListProps = { data: QueryResult<FeedsQueryResult, undefined> };

function FeedList({ data }: FeedListProps) {
  if (data.networkStatus === 1) {
    return <ActivityIndicator style={styles.loading} />;
  }

  if (data.error) {
    return <Text>Error! {data.error.message}</Text>;
  }

  return (
    <List
      contentContainerStyle={styles.list}
      data={data.data?.feed}
      renderItem={({ item }) => (
        <ListItem
          title={`${item.repository.owner.login}/${item.repository.name}`}
          description={`Posted by ${item.postedBy.login}`}
          accessoryRight={
            item.repository.stargazers_count
              ? () => (
                  <Text
                    style={{
                      right: 10,
                      backgroundColor: "#56579B",
                      fontSize: 12,
                    }}
                  >{`☆ ${item.repository.stargazers_count}`}</Text>
                )
              : undefined
          }
        />
      )}
    />
  );
}

// The data prop here comes from the Apollo HoC. It has the data
// we asked for, and also useful methods like refetch().
const FeedView = () => {
  const data = useQuery<FeedsQueryResult, undefined>(GET_FEEDS_QUERY);

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        // This enables the pull-to-refresh functionality
        <RefreshControl
          refreshing={data.networkStatus === 4}
          onRefresh={data.refetch}
        />
      }
    >
      <Layout style={styles.view}>
        <Text style={styles.title}>GitHunt</Text>
        <FeedList data={data} />
      </Layout>
    </ScrollView>
  );
};

const PodcastsScreen = (): React.ReactNode => {
  return (
    <SafeAreaView style={styles.view}>
      <Layout style={styles.layout}>
        <FeedView />
      </Layout>
    </SafeAreaView>
  );
};

export default PodcastsScreen;
