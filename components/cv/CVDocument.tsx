import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Svg,
  Path,
  Image,
  Link,
  Defs,
  LinearGradient,
  Stop,
  Rect,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    fontFamily: 'Roboto',
  },
  sidebar: {
    width: '29%',
    backgroundColor: '#180e0d',
    paddingVertical: 18,
    paddingHorizontal: 14,
    color: '#f0dedc',
  },
  main: {
    width: '71%',
    paddingVertical: 20,
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
  },
  // Sidebar styles
  initialsContainer: {
    alignItems: 'center',
    marginBottom: 12,
  },
  initialsCircle: {
    width: 55,
    height: 55,
    backgroundColor: '#8c2a23',
    borderRadius: 27.5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
    borderWidth: 1.5,
    borderColor: '#e73c29',
    overflow: 'hidden',
    aspectRatio: 1,
  },
  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    objectFit: 'cover',
    aspectRatio: 1,
  },
  initialsText: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
  },
  sidebarName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 3,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  sidebarRole: {
    fontSize: 7.5,
    color: '#e09691',
    textAlign: 'center',
    fontWeight: 'medium',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    paddingHorizontal: 2,
  },
  sidebarDivider: {
    width: '100%',
    height: 1,
    backgroundColor: '#2a1a19',
    marginVertical: 6,
  },
  sidebarSectionTitle: {
    fontSize: 8.5,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#e73c29',
    letterSpacing: 1.2,
    marginBottom: 5,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  iconContainer: {
    width: 10,
    height: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  contactText: {
    fontSize: 6.8,
    color: '#f0dedc',
    flex: 1,
  },
  skillBadge: {
    backgroundColor: '#2a1a19',
    borderWidth: 1,
    borderColor: '#8c2a23',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
    fontSize: 7,
    color: '#FFFFFF',
    marginBottom: 4,
    marginRight: 4,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  languageDot: {
    width: 2.5,
    height: 2.5,
    backgroundColor: '#e73c29',
    borderRadius: 1.25,
    marginRight: 5,
  },
  languageText: {
    fontSize: 7,
    color: '#f0dedc',
    fontWeight: 'medium',
  },
  softSkillItem: {
    fontSize: 7,
    color: '#f0dedc',
    paddingLeft: 8,
    borderLeftWidth: 1,
    borderLeftColor: '#8c2a23',
    fontWeight: 'bold',
  },
  softSkillDesc: {
    fontSize: 6.2,
    color: '#f0dedc',
    opacity: 0.8,
    paddingLeft: 8,
    borderLeftWidth: 1,
    borderLeftColor: '#8c2a23',
    marginTop: 0,
    paddingBottom: 0,
  },
  // Main styles
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
    paddingBottom: 2,
  },
  sectionTitleDecorator: {
    width: 7,
    height: 7,
    backgroundColor: '#8c2a23',
    borderRadius: 1.5,
    marginRight: 7,
  },
  sectionTitle: {
    fontSize: 11.5,
    fontWeight: 'bold',
    color: '#180e0d',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  summary: {
    fontSize: 8.5,
    color: '#475569',
    lineHeight: 1.4,
    marginBottom: 8,
    textAlign: 'justify',
  },
  experienceItem: {
    marginBottom: 12,
    paddingLeft: 14,
    borderLeftWidth: 1,
    borderLeftColor: '#f1f5f9',
    position: 'relative',
  },
  timelineDot: {
    position: 'absolute',
    left: -3,
    top: 3,
    width: 5,
    height: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 2.5,
    borderWidth: 1,
    borderColor: '#8c2a23',
  },
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 3,
  },
  expRole: {
    fontSize: 10.5,
    fontWeight: 'bold',
    color: '#180e0d',
    flex: 1,
    marginRight: 10,
  },
  periodBadge: {
    fontSize: 6.5,
    fontWeight: 'bold',
    color: '#8c2a23',
    backgroundColor: '#fff1f1',
    paddingHorizontal: 5,
    paddingVertical: 1.5,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: '#fbdbdb',
    flexShrink: 0,
    textAlign: 'center',
  },
  periodBadgePast: {
    fontSize: 6.5,
    fontWeight: 'bold',
    color: '#64748b',
    backgroundColor: '#f8fafc',
    paddingHorizontal: 5,
    paddingVertical: 1.5,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: '#e2e8f0',
    flexShrink: 0,
    textAlign: 'center',
  },
  company: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#64748b',
    marginBottom: 5,
    letterSpacing: 0.3,
  },
  description: {
    fontSize: 8.5,
    color: '#475569',
    lineHeight: 1.35,
  },
  eduItem: {
    marginBottom: 8,
    backgroundColor: '#f8fafc',
    padding: 6,
    borderRadius: 4,
  },
  eduHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 3,
  },
  eduDegree: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#180e0d',
  },
  eduPeriod: {
    fontSize: 7,
    color: '#64748b',
    fontWeight: 'medium',
  },
  eduSchool: {
    fontSize: 8,
    color: '#475569',
    fontWeight: 'medium',
  },
  projTechBadge: {
    fontSize: 7,
    backgroundColor: '#f8fafc',
    color: '#64748b',
    borderWidth: 0.5,
    borderColor: '#e2e8f0',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 5,
    marginBottom: 4,
  },
  projectLink: {
    fontSize: 8,
    color: '#8c2a23',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginTop: 5,
  },
});

// Helper for SVG Icons
const Icon = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.iconContainer}>
    <Svg width="10" height="10" viewBox="0 0 24 24">
      {children}
    </Svg>
  </View>
);

// Helper for text formatting
const FormattedDescription = ({ text }: { text: string }) => {
  return (
    <View>
      {text.split("\n").map((line, i) => {
        const trimmedLine = line.trim();
        if (trimmedLine.startsWith("•")) {
          return (
            <View key={i} style={{ flexDirection: "row", marginBottom: 2, paddingLeft: 2 }}>
              <Text style={{ width: 8, fontSize: 8.5, color: "#8c2a23", fontWeight: 'bold' }}>•</Text>
              <Text style={[styles.description, { flex: 1 }]}>
                {trimmedLine.substring(1).trim()}
              </Text>
            </View>
          );
        }
        return (
          <Text key={i} style={[styles.description, { marginBottom: 3 }]}>
            {line}
          </Text>
        );
      })}
    </View>
  );
};

export interface CVData {
  name: string;
  image?: string;
  role: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    website: string;
    linkedin: string;
    github: string;
  };
  summary: string;
  experience: Array<{
    company: string;
    role: string;
    period: string;
    description: string;
  }>;
  skills: {
    technical: string[];
    languages: string[];
  };
  education: Array<{
    school: string;
    degree: string;
    period: string;
  }>;
  projects?: Array<{
    name: string;
    technologies?: string[];
    description: string;
    link?: string;
  }>;
  softSkills?: Array<{
    name: string;
    description?: string;
  }>;
  interests?: string[];
}

export interface CVLabels {
  contact: string;
  skills: string;
  languages: string;
  profile: string;
  experience: string;
  projects: string;
  education: string;
  softSkills: string;
  interests: string;
  download: string;
  loading: string;
  error: string;
}

export const CVDocument = ({
  data,
  labels,
}: {
  data: CVData;
  labels: CVLabels;
}) => (
  <Document title={`CV - ${data.name}`} author={data.name}>
    <Page size="A4" style={styles.page}>
      {/* Sidebar - Dark theme with subtle gradient */}
      <View style={styles.sidebar}>
        <Svg
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <Defs>
            <LinearGradient id="sidebarGradient" x1="0" y1="0" x2="1" y2="1">
              <Stop offset="0%" stopColor="#2d1512" />
              <Stop offset="50%" stopColor="#180e0d" />
              <Stop offset="100%" stopColor="#180e0d" />
            </LinearGradient>
          </Defs>
          <Rect
            x="0"
            y="0"
            width="100"
            height="100"
            fill="url(#sidebarGradient)"
          />
        </Svg>

        <View style={styles.initialsContainer}>
          <View style={styles.initialsCircle}>
            {data.image ? (
              <Image src={data.image} style={styles.profileImage} />
            ) : (
              <Text style={styles.initialsText}>
                {data.name
                  ? data.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()
                  : "??"}
              </Text>
            )}
          </View>
          <Text style={styles.sidebarName}>{data.name}</Text>
          <Text style={styles.sidebarRole}>{data.role}</Text>
        </View>

        <View style={styles.sidebarDivider} />

        <Text style={styles.sidebarSectionTitle}>{labels.contact}</Text>
        <View style={styles.contactItem}>
          <Icon>
            <Path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#e73c29" />
          </Icon>
          <Text style={styles.contactText}>{data.contact.email}</Text>
        </View>
        <View style={styles.contactItem}>
          <Icon>
            <Path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#e73c29" />
          </Icon>
          <Text style={styles.contactText}>{data.contact.phone}</Text>
        </View>
        <View style={styles.contactItem}>
          <Icon>
            <Path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14c-.16-.64-.26-1.31-.26-2s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.91-4.33-3.56zm2.95-8H5.08c.96-1.65 2.49-2.93 4.33-3.56-.6 1.11-1.06 2.31-1.38 3.56zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.34.16-2h4.68c.09.66.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" fill="#e73c29" />
          </Icon>
          <Link
            src={`https://${data.contact.website}`}
            style={styles.contactText}
          >
            {data.contact.website}
          </Link>
        </View>
        <View style={styles.contactItem}>
          <Icon>
            <Path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill="#e73c29" />
          </Icon>
          <Link 
            src={data.contact.linkedin}
            style={styles.contactText}
          >
            {data.contact.linkedin?.split("/").filter(Boolean).pop() ||
              "LinkedIn"}
          </Link>
        </View>

        <View style={styles.sidebarDivider} />

        <Text style={styles.sidebarSectionTitle}>{labels.skills}</Text>
        <View style={styles.skillsContainer}>
          {data.skills.technical.map((skill) => (
            <Text key={skill} style={styles.skillBadge}>
              {skill}
            </Text>
          ))}
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={styles.sidebarSectionTitle}>{labels.languages}</Text>
          {data.skills.languages.map((lang) => (
            <View key={lang} style={styles.languageItem}>
              <View style={styles.languageDot} />
              <Text style={styles.languageText}>{lang}</Text>
            </View>
          ))}
        </View>

        {data.softSkills && data.softSkills.length > 0 && (
          <View style={{ marginTop: 12 }}>
            <Text style={styles.sidebarSectionTitle}>{labels.softSkills}</Text>
            {data.softSkills.map((skill, index) => (
              <View key={index} style={{ marginBottom: 6 }}>
                <Text style={styles.softSkillItem}>{skill.name}</Text>
                {skill.description && (
                  <Text style={styles.softSkillDesc}>
                    {skill.description}
                  </Text>
                )}
              </View>
            ))}
          </View>
        )}

        {data.interests && data.interests.length > 0 && (
          <View style={{ marginTop: 12 }}>
            <Text style={styles.sidebarSectionTitle}>{labels.interests}</Text>
            {data.interests.map((interest, index) => (
              <View key={index} style={{ marginBottom: 4 }}>
                <Text style={styles.softSkillItem}>{interest}</Text>
              </View>
            ))}
          </View>
        )}

        <View style={{ marginTop: 32, alignItems: 'center' }}>
          <Text style={[styles.sidebarSectionTitle, { marginBottom: 6 }]}>Portafolio Online</Text>
          <View style={{ backgroundColor: '#FFFFFF', padding: 3, borderRadius: 4 }}>
            <Image 
              src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://${data.contact.website}&color=180e0d`}
              style={{ width: 50, height: 50 }}
            />
          </View>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.main}>
        <View style={{ marginBottom: 25 }}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleDecorator} />
            <Text style={styles.sectionTitle}>{labels.profile}</Text>
          </View>
          <Text style={styles.summary}>{data.summary}</Text>
        </View>

        <View style={{ marginBottom: 25 }}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleDecorator} />
            <Text style={styles.sectionTitle}>{labels.experience}</Text>
          </View>
          {data.experience.map((exp, i) => (
            <View key={i} style={styles.experienceItem}>
              <View style={styles.timelineDot} />
              <View style={styles.expHeader}>
                <Text style={styles.expRole}>{exp.role}</Text>
                <Text
                  style={
                    exp.period.toLowerCase().includes("presente") || exp.period.toLowerCase().includes("present")
                      ? styles.periodBadge
                      : styles.periodBadgePast
                  }
                >
                  {exp.period}
                </Text>
              </View>
              <Text style={styles.company}>{exp.company}</Text>
              <FormattedDescription text={exp.description} />
            </View>
          ))}
        </View>

        {data.projects && data.projects.length > 0 && (
          <View style={{ marginBottom: 25 }}>
            <View style={styles.sectionHeader}>
              <View style={styles.sectionTitleDecorator} />
              <Text style={styles.sectionTitle}>{labels.projects}</Text>
            </View>
            {data.projects.map((proj, i) => (
              <View key={i} style={styles.eduItem}>
                <View style={[styles.eduHeader, { marginBottom: 4 }]}>
                  <Text style={styles.eduDegree}>{proj.name}</Text>
                </View>
                {proj.technologies && (
                  <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 4 }}>
                    {proj.technologies.map(tech => (
                      <Text 
                        key={tech} 
                        style={styles.periodBadge}
                      >
                        {tech}
                      </Text>
                    ))}
                  </View>
                )}
                <FormattedDescription text={proj.description} />
                {proj.link && (
                  <Link src={`https://${proj.link}`} style={styles.projectLink}>
                    {proj.link}
                  </Link>
                )}
              </View>
            ))}
          </View>
        )}

        <View>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleDecorator} />
            <Text style={styles.sectionTitle}>{labels.education}</Text>
          </View>
          {data.education.map((edu, i) => (
            <View key={i} style={styles.eduItem}>
              <View style={styles.eduHeader}>
                <Text style={styles.eduDegree}>{edu.degree}</Text>
                <Text
                  style={
                    edu.period.toLowerCase().includes("presente") || edu.period.toLowerCase().includes("present")
                      ? styles.periodBadge
                      : styles.periodBadgePast
                  }
                >
                  {edu.period}
                </Text>
              </View>
              <Text style={styles.eduSchool}>{edu.school}</Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);
