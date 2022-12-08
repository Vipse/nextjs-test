import type { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';

import { BlockTypes } from '@/shared/constants/blockTypes';
import type { RootArticles } from '@/shared/types/articleData';
import type { ItemsResponse } from '@/shared/types/generics';
import type { RootVideos } from '@/shared/types/rootVideos';
import type { CompetitionRail } from '@/shared/types/templateBlock/competitionRail';
import type { ContentRail } from '@/shared/types/templateBlock/contentRail';
import type { ContentRailAutomatic } from '@/shared/types/templateBlock/contentRailAutomatic';
import type { EditorialBlock1Automatic } from '@/shared/types/templateBlock/editorialBlock1Automatic';
import type { EditorialBlock1Manual } from '@/shared/types/templateBlock/editorialBlock1Manual';
import type { EditorialWithThumbnails } from '@/shared/types/templateBlock/editorialWithThumnails';
import type { EditorialWithThumbnailsAutomatic } from '@/shared/types/templateBlock/editorialWithThumnailsAutomatic';
import type { FeaturedVideo } from '@/shared/types/templateBlock/featuredVideo';
import type { FeaturedVideoAutomatic } from '@/shared/types/templateBlock/featuredVideoAutomatic';
import type { FollowUsBlock } from '@/shared/types/templateBlock/followUsBlock';
import type { H2h } from '@/shared/types/templateBlock/h2h';
import type { OptaFixturesWidget } from '@/shared/types/templateBlock/optaFixturesWidget';
import type { OptaStandingsWidget } from '@/shared/types/templateBlock/optaStandingsWidget';
import type { Scoreboard } from '@/shared/types/templateBlock/scoreboard';
import type { TeamRail } from '@/shared/types/templateBlock/teamRail';
import type { VideoRail } from '@/shared/types/templateBlock/videoRail';
import type { VideoRailAutomatic } from '@/shared/types/templateBlock/videoRailAutomatic';
import type { VideoEntity } from '@/shared/types/videoEntity';

import type { BlocksNeedData } from '../types/blockNeedsData';

const fillData =
  (blocksNeedData: BlocksNeedData) =>
  (resp: QueryReturnValue<unknown, unknown, unknown>, index: number) => {
    if (resp.data) {
      if (
        blocksNeedData[index]._type ===
        BlockTypes.editorialWithThumnailsAutomatic
      ) {
        (
          blocksNeedData[index] as EditorialWithThumbnailsAutomatic
        ).items_in_the_top_section =
          (resp.data as RootArticles)?.items?.[0] || null;
        (
          blocksNeedData[index] as EditorialWithThumbnailsAutomatic
        ).items_in_the_bottom_section =
          (resp.data as RootArticles)?.items?.slice(1) || [];
      } else if (
        blocksNeedData[index]._type === BlockTypes.videoRailBlockAutomatic
      ) {
        (blocksNeedData[index] as VideoRailAutomatic).items = (
          resp.data as ItemsResponse<VideoEntity>
        ).items;
      } else if (
        blocksNeedData[index]._type === BlockTypes.featuredVideoAutomatic
      ) {
        (blocksNeedData[index] as FeaturedVideoAutomatic).videos = (
          resp.data as RootVideos
        ).items;
      } else if (blocksNeedData[index]._type === BlockTypes.competitionRail) {
        const competitionRailData = resp.data as ItemsResponse<CompetitionRail>;

        (blocksNeedData[index] as CompetitionRail).competitions =
          competitionRailData?.items[0]?.competitions || [];
      } else if (blocksNeedData[index]._type === BlockTypes.teamRail) {
        const teamRailData = resp.data as ItemsResponse<TeamRail>;

        (blocksNeedData[index] as TeamRail).teams =
          teamRailData?.items[0]?.teams || [];
      } else if (blocksNeedData[index]._type === BlockTypes.scoreboard) {
        const scoreboardData = resp.data as ItemsResponse<Scoreboard>;

        (blocksNeedData[index] as Scoreboard).items =
          scoreboardData?.items[0]?.items || [];
        (blocksNeedData[index] as Scoreboard).event =
          scoreboardData?.items[0]?.event || null;
      } else if (
        blocksNeedData[index]._type === BlockTypes.editorialBlock1Manual
      ) {
        const editorialBlockData =
          resp.data as ItemsResponse<EditorialBlock1Manual>;

        (blocksNeedData[index] as Scoreboard).items =
          editorialBlockData?.items[0]?.items || [];
      } else if (blocksNeedData[index]._type === BlockTypes.contentRailManual) {
        const contentRailBlockData = resp.data as ItemsResponse<ContentRail>;

        (blocksNeedData[index] as ContentRail).items =
          contentRailBlockData?.items[0]?.items || [];
      } else if (blocksNeedData[index]._type === BlockTypes.h2hWithoutArticle) {
        const editorialBlockData = resp.data as ItemsResponse<H2h>;

        (blocksNeedData[index] as H2h).event =
          editorialBlockData?.items[0]?.event || [];
      } else if (
        blocksNeedData[index]._type === BlockTypes.videoRailBlockManual
      ) {
        const editorialBlockData = resp.data as ItemsResponse<VideoRail>;

        (blocksNeedData[index] as VideoRail).items =
          editorialBlockData?.items[0]?.items || [];
      } else if (
        blocksNeedData[index]._type === BlockTypes.optaWidgetStandings
      ) {
        const editorialBlockData =
          resp.data as ItemsResponse<OptaStandingsWidget>;

        (blocksNeedData[index] as OptaStandingsWidget).linked_competition =
          editorialBlockData?.items[0]?.linked_competition || null;
      } else if (
        blocksNeedData[index]._type === BlockTypes.optaWidgetFixtures
      ) {
        const editorialBlockData =
          resp.data as ItemsResponse<OptaFixturesWidget>;

        (blocksNeedData[index] as OptaFixturesWidget).linked_competition =
          editorialBlockData?.items[0]?.linked_competition || null;
      } else if (
        blocksNeedData[index]._type === BlockTypes.featuredVideoManual
      ) {
        const editorialBlockData = resp.data as ItemsResponse<FeaturedVideo>;

        (blocksNeedData[index] as FeaturedVideo).videos =
          editorialBlockData?.items[0]?.videos || [];
      } else if (blocksNeedData[index]._type === BlockTypes.followUs) {
        const followUsBlockData = resp.data as ItemsResponse<FollowUsBlock>;

        (blocksNeedData[index] as FollowUsBlock).items =
          followUsBlockData?.items[0]?.items || [];
      } else if (
        blocksNeedData[index]._type === BlockTypes.editorialWithThumnailsManual
      ) {
        const editorialWithThumbnailsBlockData =
          resp.data as ItemsResponse<EditorialWithThumbnails>;

        (
          blocksNeedData[index] as EditorialWithThumbnails
        ).items_in_the_top_section =
          editorialWithThumbnailsBlockData?.items?.[0]
            ?.items_in_the_top_section || null;
        (
          blocksNeedData[index] as EditorialWithThumbnails
        ).items_in_the_bottom_section =
          editorialWithThumbnailsBlockData?.items?.[0]
            ?.items_in_the_bottom_section || [];
      } else {
        (
          blocksNeedData[index] as
            | EditorialBlock1Automatic
            | ContentRailAutomatic
        ).items = (resp.data as RootArticles)?.items || [];
      }
    }
  };

export default fillData;
