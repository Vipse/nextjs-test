import { BlockTypes } from '@/shared/constants/blockTypes';
import type { TemplateBlock } from '@/shared/types/templateBlock';
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
import type { NewsFeed } from '@/shared/types/templateBlock/newsFeed';
import type { OptaFixturesWidget } from '@/shared/types/templateBlock/optaFixturesWidget';
import type { OptaStandingsWidget } from '@/shared/types/templateBlock/optaStandingsWidget';
import type { Scoreboard } from '@/shared/types/templateBlock/scoreboard';
import type { TeamRail } from '@/shared/types/templateBlock/teamRail';
import type { VideoRail } from '@/shared/types/templateBlock/videoRail';
import type { VideoRailAutomatic } from '@/shared/types/templateBlock/videoRailAutomatic';

import type { BlocksNeedData } from '@/store/types/blockNeedsData';

const fillBlocksNeedData =
  (arrayToFill: BlocksNeedData) => (block: TemplateBlock) => {
    if (block._type === BlockTypes.editorialWithThumnailsAutomatic) {
      arrayToFill.push(block as EditorialWithThumbnailsAutomatic);
    } else if (block._type === BlockTypes.editorialWithThumnailsManual) {
      arrayToFill.push(block as EditorialWithThumbnails);
    } else if (block._type === BlockTypes.editorialBlock1Manual) {
      arrayToFill.push(block as EditorialBlock1Manual);
    } else if (block._type === BlockTypes.editorialBlock1Automatic) {
      arrayToFill.push(block as EditorialBlock1Automatic);
    } else if (block._type === BlockTypes.contentRailAutomatic) {
      arrayToFill.push(block as ContentRailAutomatic);
    } else if (block._type === BlockTypes.contentRailManual) {
      arrayToFill.push(block as ContentRail);
    } else if (block._type === BlockTypes.videoRailBlockManual) {
      arrayToFill.push(block as VideoRail);
    } else if (block._type === BlockTypes.videoRailBlockAutomatic) {
      arrayToFill.push(block as VideoRailAutomatic);
    } else if (block._type === BlockTypes.featuredVideoAutomatic) {
      arrayToFill.push(block as FeaturedVideoAutomatic);
    } else if (block._type === BlockTypes.featuredVideoManual) {
      arrayToFill.push(block as FeaturedVideo);
    } else if (block._type === BlockTypes.competitionRail) {
      arrayToFill.push(block as CompetitionRail);
    } else if (block._type === BlockTypes.teamRail) {
      arrayToFill.push(block as TeamRail);
    } else if (block._type === BlockTypes.newsFeed) {
      arrayToFill.push(block as NewsFeed);
    } else if (block._type === BlockTypes.scoreboard) {
      arrayToFill.push(block as Scoreboard);
    } else if (block._type === BlockTypes.h2hWithoutArticle) {
      arrayToFill.push(block as H2h);
    } else if (block._type === BlockTypes.followUs) {
      arrayToFill.push(block as FollowUsBlock);
    } else if (block._type === BlockTypes.optaWidgetStandings) {
      arrayToFill.push(block as OptaStandingsWidget);
    } else if (block._type === BlockTypes.optaWidgetFixtures) {
      arrayToFill.push(block as OptaFixturesWidget);
    }
  };

export default fillBlocksNeedData;
