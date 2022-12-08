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

export type BlockNeedsData =
  | EditorialWithThumbnailsAutomatic
  | EditorialWithThumbnails
  | EditorialBlock1Automatic
  | EditorialBlock1Manual
  | ContentRailAutomatic
  | ContentRail
  | VideoRailAutomatic
  | VideoRail
  | CompetitionRail
  | TeamRail
  | NewsFeed
  | H2h
  | Scoreboard
  | FeaturedVideo
  | FollowUsBlock
  | FeaturedVideoAutomatic
  | OptaFixturesWidget
  | OptaStandingsWidget;

export type BlocksNeedData = BlockNeedsData[];
