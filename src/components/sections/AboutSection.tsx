'use client';

interface ContentProps {
  company_name?: string;
  about_section?: string;
  yearEstablished?: number;
  legal_status?: string;
  business_type?: string;
  city?: string;
  state?: string;
}

export default function AboutSection(props: ContentProps) {
  const companyName = props.company_name || 'Our Company';
  const about = props.about_section || 'We are a leading company in our industry.';

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            About {companyName}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">{about}</p>
            
            {props.yearEstablished && (
              <p className="mt-4 text-gray-600">
                Established in <strong>{props.yearEstablished}</strong>
                {props.city && props.state && (
                  <>, we are based in {props.city}, {props.state}</>
                )}
                .
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
